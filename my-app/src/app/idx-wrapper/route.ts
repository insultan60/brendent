import { brand, footerColumns, navLinks, socialLinks } from '@/mocks/homeData';

/*
 * IDX Broker dynamic wrapper.
 *
 * IDX Broker fetches this page, keeps everything outside the two marker divs
 * (idxStart / idxStop) and drops its search pages in between. That is how
 * bwmetroproperties.idxbroker.com gets the site's header and footer.
 *
 * Set it once in IDX Broker -> Designs -> Website Integration -> Wrappers ->
 * Global Wrapper URL:  https://bwmetroproperties.com/idx-wrapper
 *
 * Why plain HTML rather than a Next page:
 *  - The page is shown on IDX's domain, so a React app would hydrate on the
 *    wrong URL and wipe the listings IDX inserted between the markers.
 *  - Every link, image and stylesheet has to be absolute, or it would resolve
 *    against idxbroker.com. Links are built from the origin IDX requested, so
 *    they follow the site from the Vercel URL to the real domain.
 *
 * Header and footer read the same nav, footer and brand data as the site, so
 * a menu change shows up here too. The IDX look itself lives in
 * public/idx/bwmetro-idx.css.
 */

const esc = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const socialIcon: Record<string, string> = {
  facebook: 'ri-facebook-fill',
  instagram: 'ri-instagram-line',
  linkedin: 'ri-linkedin-fill',
  youtube: 'ri-youtube-fill',
};

const PHONE_SVG =
  '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';

const STYLES = `
*,*::before,*::after{box-sizing:border-box}
body{margin:0;background:#fbf9f5;color:#3d3a35;font-family:'Onest',system-ui,sans-serif;-webkit-font-smoothing:antialiased}
.bwm-header{position:sticky;top:0;z-index:1000;background:#13100b;border-bottom:1px solid rgba(255,255,255,.08)}
.bwm-bar{max-width:1500px;margin:0 auto;height:84px;padding:0 40px;display:flex;align-items:center;justify-content:space-between;gap:24px}
.bwm-logo img{display:block;height:40px;width:auto}
.bwm-nav{display:flex;align-items:center;gap:34px;margin:0;padding:0;list-style:none}
.bwm-nav a,.bwm-nav button{color:#f4f1eb;text-decoration:none;font:500 14px/1 'Onest',sans-serif;letter-spacing:.02em;background:none;border:0;padding:6px 0;cursor:pointer;transition:color .3s}
.bwm-nav a:hover,.bwm-nav button:hover{color:#f9886a}
.bwm-drop{position:relative}
.bwm-drop ul{position:absolute;top:100%;left:-18px;min-width:240px;margin:0;padding:10px;list-style:none;background:#13100b;border:1px solid rgba(255,255,255,.1);border-radius:16px;box-shadow:0 24px 50px -24px rgba(0,0,0,.8);opacity:0;visibility:hidden;transform:translateY(6px);transition:opacity .25s,transform .25s,visibility .25s}
.bwm-drop:hover ul,.bwm-drop:focus-within ul{opacity:1;visibility:visible;transform:none}
.bwm-drop ul a{display:block;padding:11px 14px;border-radius:10px;white-space:nowrap}
.bwm-drop ul a:hover{background:rgba(255,255,255,.06)}
.bwm-actions{display:flex;align-items:center;gap:18px}
.bwm-phone{display:inline-flex;align-items:center;gap:8px;color:#fff;text-decoration:none;font:600 15px 'Onest',sans-serif;white-space:nowrap}
.bwm-cta{display:inline-flex;align-items:center;white-space:nowrap;border-radius:999px;background:#e06345;color:#fff;text-decoration:none;font:600 14px 'Onest',sans-serif;padding:15px 28px;transition:background .3s}
.bwm-cta:hover{background:#c25034}
.bwm-menu{display:none}
.bwm-menu summary{list-style:none;cursor:pointer;color:#fff;border:1px solid rgba(255,255,255,.25);border-radius:999px;padding:11px 18px;font:600 12px 'Onest',sans-serif;letter-spacing:.24em}
.bwm-menu summary::-webkit-details-marker{display:none}
.bwm-menu[open] .bwm-panel{display:block}
.bwm-panel{display:none;position:absolute;left:0;right:0;top:100%;background:#13100b;border-top:1px solid rgba(255,255,255,.08);padding:12px 20px 28px;max-height:calc(100vh - 74px);overflow:auto}
.bwm-panel a{display:block;color:#f4f1eb;text-decoration:none;font:500 16px 'Onest',sans-serif;padding:14px 4px;border-bottom:1px solid rgba(255,255,255,.07)}
.bwm-panel .bwm-sub{padding-left:18px;font-size:14px;color:#d8d4cb}
.bwm-panel .bwm-cta{display:flex;justify-content:center;margin-top:20px;border:0}
.bwm-main{max-width:1420px;margin:0 auto;padding:40px 24px 80px;min-height:60vh}
.bwm-footer{background:#13100b;color:#f4f1eb}
.bwm-foot{max-width:1420px;margin:0 auto;padding:80px 40px 40px}
.bwm-grid{display:grid;grid-template-columns:5fr 2fr 2fr 2fr 3fr;gap:40px}
.bwm-footer img.bwm-flogo{height:54px;width:auto}
.bwm-about{margin:26px 0 0;max-width:420px;font-size:15.5px;line-height:1.65;color:rgba(244,241,235,.85)}
.bwm-social{display:flex;gap:10px;margin:26px 0 0;padding:0;list-style:none}
.bwm-social a{display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:999px;border:1px solid rgba(255,255,255,.2);color:#f4f1eb;text-decoration:none;font-size:17px;transition:border-color .3s,color .3s}
.bwm-social a:hover{border-color:#d3bf8f;color:#d3bf8f}
.bwm-h{margin:0 0 20px;font:600 11px 'Onest',sans-serif;letter-spacing:.24em;text-transform:uppercase;color:#f9886a}
.bwm-links{margin:0;padding:0;list-style:none;display:grid;gap:13px}
.bwm-links a,.bwm-contact a{color:#f4f1eb;text-decoration:none;font-size:15px;transition:color .3s}
.bwm-links a:hover,.bwm-contact a:hover{color:#d3bf8f}
.bwm-contact{margin:0;padding:0;list-style:none;display:grid;gap:13px;font-size:15px;line-height:1.5;color:rgba(244,241,235,.85)}
.bwm-psr{height:44px;width:auto;margin-top:18px}
.bwm-legal{margin-top:64px;padding-top:28px;border-top:1px solid rgba(255,255,255,.12);display:flex;flex-wrap:wrap;gap:16px;justify-content:space-between;font-size:12px;color:rgba(244,241,235,.6)}
.bwm-legal a{color:inherit;text-decoration:none;margin-left:26px}
.bwm-legal a:hover{color:#d3bf8f}
@media (max-width:1180px){.bwm-nav,.bwm-phone{display:none}.bwm-menu{display:block}.bwm-grid{grid-template-columns:1fr 1fr 1fr}.bwm-brand,.bwm-visit{grid-column:1/-1}}
@media (max-width:640px){.bwm-bar{height:74px;padding:0 20px}.bwm-logo img{height:34px}.bwm-actions .bwm-cta{display:none}.bwm-main{padding:24px 16px 60px}.bwm-foot{padding:60px 20px 32px}.bwm-grid{grid-template-columns:1fr 1fr}.bwm-legal a{margin:0 18px 0 0}}
`;

/*
 * The site's "Get My Home Value" boxes send visitors to IDX's Home Valuation
 * form with the address they typed in ?bwAddress= (see idxHomeValuationUrl).
 * IDX cannot pre-fill its form from the URL, so this does it: it splits
 * "8315 Lee Hwy, Fairfax, VA 22031" into street / city & state / zip and fills
 * any of those fields that are still empty. It does nothing on other pages.
 */
const PREFILL_SCRIPT = `(function () {
  var raw = new URLSearchParams(location.search).get('bwAddress');
  var street = document.getElementById('IDX-hvAddress');
  if (!raw || !street) return;
  var rest = raw.trim();
  var zipMatch = rest.match(/\\s*(\\d{5})(?:-\\d{4})?\\s*$/);
  var zip = zipMatch ? zipMatch[1] : '';
  if (zipMatch) rest = rest.slice(0, zipMatch.index);
  var parts = rest.split(',').map(function (p) { return p.trim(); }).filter(Boolean);
  var fill = function (id, value) {
    var el = document.getElementById(id);
    if (el && value && !el.value) {
      el.value = value;
      el.dispatchEvent(new Event('input', { bubbles: true }));
      el.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };
  fill('IDX-hvAddress', parts[0] || rest);
  fill('IDX-hvCityState', parts.slice(1).join(', '));
  fill('IDX-hvZipcode', zip);
})();`;

/*
 * IDX's map search shows its search-type <select> on phones with nothing
 * selected (an IDX bug), so it looks like an empty box. This selects the
 * option that matches the active tab. IDX draws the page after load, so it
 * retries for a few seconds.
 */
const NAV_SELECT_SCRIPT = `(function () {
  var tries = 0;
  var fix = function () {
    var select = document.querySelector('.idx-nav-button-container-mobile select');
    var buttons = document.querySelectorAll('.idx-nav-button');
    var active = document.querySelector('.idx-nav-button__active');
    if (select && active && select.selectedIndex < 0) {
      select.selectedIndex = Array.prototype.indexOf.call(buttons, active);
      return;
    }
    if (tries++ < 20) setTimeout(fix, 500);
  };
  fix();
})();`;

function render(origin: string) {
  const url = (href: string) => (href.startsWith('#') ? `${origin}/${href}` : href.startsWith('/') ? `${origin}${href}` : href);
  const link = (label: string, href: string, cls = '') =>
    `<a href="${esc(url(href))}"${cls ? ` class="${cls}"` : ''}>${esc(label)}</a>`;
  const consult = url(brand.bookingUrl);

  const desktopNav = navLinks
    .map((item) =>
      item.children
        ? `<li class="bwm-drop"><button type="button" aria-haspopup="true">${esc(item.label)} &#9662;</button><ul>${item.children
            .map((child) => `<li>${link(child.label, child.href)}</li>`)
            .join('')}</ul></li>`
        : `<li>${link(item.label, item.href)}</li>`,
    )
    .join('');

  const mobileNav = navLinks
    .map((item) =>
      item.children
        ? item.children.map((child) => link(child.label, child.href, 'bwm-sub')).join('')
        : link(item.label, item.href),
    )
    .join('');

  const columns = footerColumns
    .map(
      (column) =>
        `<div><p class="bwm-h">${esc(column.title)}</p><ul class="bwm-links">${column.links
          .map((item) => `<li>${link(item.label, item.href)}</li>`)
          .join('')}</ul></div>`,
    )
    .join('');

  const socials = socialLinks
    .map(
      (social) =>
        `<li><a href="${esc(social.href)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(social.label)}"><i class="${socialIcon[social.icon] ?? 'ri-link'}" aria-hidden="true"></i></a></li>`,
    )
    .join('');

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Home Search | BW Metro Properties</title>
<link rel="icon" href="${origin}/icon.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Onest:wght@300;400;500;600;700&display=swap">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.5.0/remixicon.min.css">
<style>${STYLES}</style>
<link rel="stylesheet" href="${origin}/idx/bwmetro-idx.css">
</head>
<body>
<header class="bwm-header">
  <div class="bwm-bar">
    <a class="bwm-logo" href="${origin}/"><img src="${esc(brand.logo)}" alt="BW Metro Properties logo"></a>
    <ul class="bwm-nav">${desktopNav}</ul>
    <div class="bwm-actions">
      <a class="bwm-phone" href="${brand.phoneHref}">${PHONE_SVG}${esc(brand.phone)}</a>
      <a class="bwm-cta" href="${consult}">Schedule a Consultation</a>
      <details class="bwm-menu">
        <summary>MENU</summary>
        <nav class="bwm-panel" aria-label="Main menu">
          ${mobileNav}
          ${link(`Call ${brand.phone}`, brand.phoneHref)}
          <a class="bwm-cta" href="${consult}">Schedule a Consultation</a>
        </nav>
      </details>
    </div>
  </div>
</header>

<main class="bwm-main">
<div id="idxStart"></div>
<div id="idxStop"></div>
</main>

<footer class="bwm-footer">
  <div class="bwm-foot">
    <div class="bwm-grid">
      <div class="bwm-brand">
        <img class="bwm-flogo" src="${esc(brand.logo)}" alt="BW Metro Properties logo">
        <p class="bwm-about">Brandon Wilson, a full-time real estate professional serving buyers, sellers and investors across Washington, D.C., Maryland and Northern Virginia.</p>
        <ul class="bwm-social">${socials}</ul>
      </div>
      ${columns}
      <div class="bwm-visit">
        <p class="bwm-h">Visit &amp; Contact</p>
        <ul class="bwm-contact">
          <li>${esc(brand.address)}</li>
          <li><a href="${brand.phoneHref}">${esc(brand.phone)}</a></li>
          <li><a href="mailto:${esc(brand.email)}">${esc(brand.email)}</a></li>
          <li>${esc(brand.licenses)}</li>
        </ul>
        <p class="bwm-h" style="margin-top:32px">Affiliated With</p>
        <img class="bwm-psr" src="${esc(brand.psrLogo)}" alt="Pearson Smith Realty logo">
      </div>
    </div>
    <div class="bwm-legal">
      <span>&copy; 2026 Unbound Solutions dba BW Metro Properties &middot; Licensed in DC, VA &amp; MD</span>
      <span>${link('Accessibility', '/accessibility')}${link('Privacy Policy', '/privacy-policy')}${link('Sitemap', '/sitemap.xml')}</span>
    </div>
  </div>
</footer>
<script>${PREFILL_SCRIPT}</script>
<script>${NAV_SELECT_SCRIPT}</script>
</body>
</html>`;
}

export function GET(request: Request) {
  const { origin } = new URL(request.url);
  return new Response(render(origin), {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      // Only IDX Broker should use this page; keep it out of search results.
      'X-Robots-Tag': 'noindex, nofollow',
      'Cache-Control': 'public, max-age=0, s-maxage=3600',
    },
  });
}
