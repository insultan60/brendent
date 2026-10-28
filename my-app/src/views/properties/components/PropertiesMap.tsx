'use client';

import { useEffect, useRef } from 'react';
import type * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ExternalLink } from 'lucide-react';
import { isClosed, type Listing } from '@/views/properties/types';
import { formatMoney, shortMoney } from '@/views/properties/utils';

const TILES = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
// Washington, D.C., for the moment before the pins are fitted.
const DMV_CENTER: [number, number] = [38.9, -77.03];

interface PropertiesMapProps {
  listings: Listing[];
  activeId: string | null;
  onActiveChange: (id: string | null) => void;
  fullMlsUrl: string;
}

function pinHtml(listing: Listing, active: boolean) {
  const tone = active
    ? 'border-primary-500 bg-primary-500 text-background-50 scale-110'
    : isClosed(listing.status)
      ? 'border-foreground-950 bg-foreground-950 text-background-50'
      : 'border-background-300 bg-background-50 text-foreground-900';
  return `<span class="absolute -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-full border px-2.5 py-1 text-[11px] font-semibold shadow-md transition-transform duration-200 ${tone}">${shortMoney(listing.price)}</span>`;
}

export default function PropertiesMap({ listings, activeId, onActiveChange, fullMlsUrl }: PropertiesMapProps) {
  const elRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const leafletRef = useRef<typeof L | null>(null);
  const markersRef = useRef(new Map<string, L.Marker>());
  const onActiveRef = useRef(onActiveChange);
  onActiveRef.current = onActiveChange;
  const active = listings.find((listing) => listing.id === activeId) ?? null;

  // Leaflet touches `window`, so it loads in the browser only.
  useEffect(() => {
    let cancelled = false;
    let observer: ResizeObserver | undefined;
    const markers = markersRef.current;
    (async () => {
      const leaflet = (await import('leaflet')).default;
      if (cancelled || !elRef.current || mapRef.current) return;
      leafletRef.current = leaflet;
      const map = leaflet.map(elRef.current, { zoomControl: false, scrollWheelZoom: false }).setView(DMV_CENTER, 10);
      leaflet.control.zoom({ position: 'bottomright' }).addTo(map);
      leaflet.tileLayer(TILES, { attribution: ATTRIBUTION, maxZoom: 19 }).addTo(map);
      // Scroll-wheel zoom only once the map is clicked, so scrolling the page
      // past the map does not get trapped zooming it.
      map.on('click', () => map.scrollWheelZoom.enable());
      map.on('mouseout', () => map.scrollWheelZoom.disable());
      mapRef.current = map;
      drawPins();
      observer = new ResizeObserver(() => map.invalidateSize());
      observer.observe(elRef.current);
    })();
    return () => {
      cancelled = true;
      observer?.disconnect();
      mapRef.current?.remove();
      mapRef.current = null;
      markers.clear();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function drawPins() {
    const leaflet = leafletRef.current;
    const map = mapRef.current;
    if (!leaflet || !map) return;
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current.clear();
    const bounds: [number, number][] = [];
    listings.forEach((listing) => {
      if (listing.lat === null || listing.lng === null) return;
      const marker = leaflet
        .marker([listing.lat, listing.lng], {
          icon: leaflet.divIcon({ className: '', html: pinHtml(listing, false), iconSize: [0, 0] }),
          keyboard: false,
          title: `${listing.address}, ${listing.city}`,
        })
        .on('click', () => onActiveRef.current(listing.id))
        .addTo(map);
      markersRef.current.set(listing.id, marker);
      bounds.push([listing.lat, listing.lng]);
    });
    if (bounds.length) map.fitBounds(bounds, { padding: [56, 56], maxZoom: 14 });
  }

  useEffect(() => {
    drawPins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listings]);

  // Highlight the active pin without redrawing (and refitting) the map.
  useEffect(() => {
    const leaflet = leafletRef.current;
    if (!leaflet) return;
    listings.forEach((listing) => {
      const marker = markersRef.current.get(listing.id);
      if (!marker) return;
      const on = listing.id === activeId;
      marker.setIcon(leaflet.divIcon({ className: '', html: pinHtml(listing, on), iconSize: [0, 0] }));
      marker.setZIndexOffset(on ? 1000 : 0);
    });
  }, [activeId, listings]);

  return (
    <div className="relative isolate h-full min-h-[320px] w-full overflow-hidden rounded-[26px] border border-background-300 bg-background-100">
      <div ref={elRef} className="absolute inset-0 z-0" />

      <div className="pointer-events-none absolute left-5 top-5 z-[500] flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-background-300 bg-background-50/90 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground-600 backdrop-blur">
          DMV Metro Map
        </span>
        <span className="rounded-full border border-background-300 bg-background-50/90 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground-600 backdrop-blur">
          {listings.length} {listings.length === 1 ? 'Home' : 'Homes'}
        </span>
      </div>

      <a
        href={fullMlsUrl}
        target="_blank"
        rel="noopener"
        className="absolute right-5 top-5 z-[500] inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-background-300 bg-background-50/95 px-4 py-2.5 text-[12px] font-semibold text-foreground-800 backdrop-blur transition-colors duration-300 hover:border-foreground-950 hover:text-foreground-950"
      >
        Search My Full MLS
        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
      </a>

      {active ? (
        <a
          href={active.url}
                    className="absolute bottom-5 left-5 right-16 z-[500] flex items-center gap-4 overflow-hidden rounded-2xl border border-background-300 bg-background-50/96 p-3 backdrop-blur transition-colors duration-300 hover:border-foreground-400 md:right-auto md:w-[340px]"
        >
          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-background-200">
            {active.image ? (
              <img
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                src={active.image}
                alt={active.address}
                className="h-full w-full object-cover"
              />
            ) : null}
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-600">{active.status}</p>
            <p className="mt-1 font-heading text-[19px] leading-none text-foreground-950">{formatMoney(active.price)}</p>
            <p className="mt-1.5 truncate text-[12px] text-foreground-600">{active.address}</p>
            <p className="text-[11px] uppercase tracking-[0.14em] text-foreground-400">
              {active.city}, {active.state}
              {active.beds ? ` · ${active.beds} bd` : ''}
              {active.baths ? ` · ${active.baths} ba` : ''}
            </p>
          </div>
        </a>
      ) : null}
    </div>
  );
}
