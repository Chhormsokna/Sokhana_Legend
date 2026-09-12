// Clean inline SVG data URIs so broken image icons never appear
export const FALLBACK_MOVIE =
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="500" height="750" viewBox="0 0 500 750" fill="none">
      <rect width="500" height="750" fill="#18181b"/>
      <radialGradient id="grad" cx="50%" cy="40%" r="50%">
        <stop offset="0%" stop-color="#dc2626" stop-opacity="0.3"/>
        <stop offset="100%" stop-color="#18181b" stop-opacity="0"/>
      </radialGradient>
      <rect width="500" height="750" fill="url(#grad)"/>
      <circle cx="250" cy="320" r="50" fill="#27272a" stroke="#dc2626" stroke-width="4"/>
      <polygon points="242,300 242,340 272,320" fill="#ffffff"/>
      <text x="250" y="420" fill="#ffffff" font-size="24" font-weight="bold" font-family="sans-serif" text-anchor="middle">LEGEND CINEMA</text>
      <text x="250" y="450" fill="#a1a1aa" font-size="14" font-family="sans-serif" text-anchor="middle">Movie Presentation</text>
    </svg>
  `);

export const FALLBACK_FOOD =
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="450" viewBox="0 0 600 450" fill="none">
      <rect width="600" height="450" fill="#18181b"/>
      <radialGradient id="fgrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ea580c" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="#18181b" stop-opacity="0"/>
      </radialGradient>
      <rect width="600" height="450" fill="url(#fgrad)"/>
      <circle cx="300" cy="200" r="45" fill="#27272a" stroke="#ea580c" stroke-width="3"/>
      <text x="300" y="210" fill="#ea580c" font-size="28" font-family="sans-serif" text-anchor="middle">🍿</text>
      <text x="300" y="280" fill="#ffffff" font-size="20" font-weight="bold" font-family="sans-serif" text-anchor="middle">Cinema Concessions</text>
      <text x="300" y="306" fill="#a1a1aa" font-size="13" font-family="sans-serif" text-anchor="middle">Fresh &amp; Delicious Snacks</text>
    </svg>
  `);

export function handleImageError(event, fallback = FALLBACK_FOOD) {
  if (event.currentTarget) {
    event.currentTarget.onerror = null;
    event.currentTarget.src = fallback;
  }
}

