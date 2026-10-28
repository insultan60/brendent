'use client';

import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

const TILES = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

/** One pin on a street map, for the detail page's Location section. */
export default function LocationMap({ lat, lng, label }: { lat: number; lng: number; label: string }) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: import('leaflet').Map | null = null;
    let cancelled = false;
    (async () => {
      const leaflet = (await import('leaflet')).default;
      if (cancelled || !elRef.current) return;
      map = leaflet.map(elRef.current, { scrollWheelZoom: false }).setView([lat, lng], 15);
      leaflet.tileLayer(TILES, { attribution: ATTRIBUTION, maxZoom: 19 }).addTo(map);
      leaflet
        .marker([lat, lng], {
          title: label,
          keyboard: false,
          icon: leaflet.divIcon({
            className: '',
            iconSize: [0, 0],
            html: '<span class="absolute -translate-x-1/2 -translate-y-full flex h-9 w-9 items-center justify-center rounded-full border-2 border-background-50 bg-primary-500 shadow-lg"><span class="h-2.5 w-2.5 rounded-full bg-background-50"></span></span>',
          }),
        })
        .addTo(map);
      map.on('click', () => map?.scrollWheelZoom.enable());
      map.on('mouseout', () => map?.scrollWheelZoom.disable());
    })();
    return () => {
      cancelled = true;
      map?.remove();
    };
  }, [lat, lng, label]);

  return <div ref={elRef} className="isolate h-[340px] w-full overflow-hidden rounded-[22px] border border-background-300 md:h-[400px]" />;
}
