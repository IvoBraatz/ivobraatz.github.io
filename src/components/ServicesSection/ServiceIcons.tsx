import React from 'react';

export function IconUIDesign() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <defs>
        <linearGradient id="ui-metal" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#b0b4ba" />
          <stop offset="1" stopColor="#e10600" />
        </linearGradient>
      </defs>
      <rect x="6" y="10" width="28" height="20" rx="4" stroke="url(#ui-metal)" strokeWidth="2.5" fill="none" />
      <rect x="12" y="16" width="16" height="8" rx="2" fill="url(#ui-metal)" />
    </svg>
  );
}

export function IconFrontend() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <defs>
        <linearGradient id="fe-metal" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e10600" />
          <stop offset="1" stopColor="#b0b4ba" />
        </linearGradient>
      </defs>
      <rect x="8" y="12" width="24" height="16" rx="3" stroke="url(#fe-metal)" strokeWidth="2.5" fill="none" />
      <rect x="14" y="18" width="12" height="4" rx="1.5" fill="url(#fe-metal)" />
    </svg>
  );
}

export function IconLanding() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <defs>
        <linearGradient id="ld-metal" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#b0b4ba" />
          <stop offset="1" stopColor="#e10600" />
        </linearGradient>
      </defs>
      <ellipse cx="20" cy="20" rx="14" ry="8" stroke="url(#ld-metal)" strokeWidth="2.5" fill="none" />
      <rect x="12" y="18" width="16" height="4" rx="2" fill="url(#ld-metal)" />
    </svg>
  );
}

export function IconIntegracao() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <defs>
        <linearGradient id="int-metal" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e10600" />
          <stop offset="1" stopColor="#b0b4ba" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="20" r="5" stroke="url(#int-metal)" strokeWidth="2.5" fill="none" />
      <circle cx="28" cy="20" r="5" stroke="url(#int-metal)" strokeWidth="2.5" fill="none" />
      <rect x="17" y="19" width="6" height="2" rx="1" fill="url(#int-metal)" />
    </svg>
  );
} 