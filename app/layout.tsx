import type { Metadata, Viewport } from 'next'
import { Inter, Poppins, Montserrat, Lexend_Deca, Fira_Code, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.scss'

// Configuração otimizada das fontes
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  weight: ['300', '400', '500', '600', '700']
})

// Fonte para títulos principais - Poppins (ExtraBold/Black)
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true
})

// Fonte alternativa para títulos - Montserrat (ExtraBold/Black)
const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
  preload: true
})

// Fonte para subtítulos e textos de destaque - Lexend Deca
const lexendDeca = Lexend_Deca({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-lexend',
  display: 'swap',
  preload: true
})

const firaCode = Fira_Code({ 
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
  preload: true,
  weight: ['300', '400', '500', '600', '700']
})

// Fonte para elementos técnicos e números - Space Grotesk
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
  preload: true
})

// Metadata otimizada para SEO
export const metadata: Metadata = {
  title: {
    default: 'Netto.codes - Desenvolvedor Full Stack | Ivo Netto',
    template: '%s | Netto.codes'
  },
  description: 'Desenvolvedor Full Stack especialista em React, Next.js, Node.js e TypeScript. Criando soluções digitais inovadoras há 22 anos. Transformo ideias em realidade digital.',
  keywords: [
    'desenvolvedor full stack',
    'react developer',
    'nextjs developer',
    'typescript developer',
    'nodejs developer',
    'frontend developer',
    'backend developer',
    'web developer',
    'freelancer desenvolvedor',
    'programador experiente',
    'desenvolvimento web',
    'aplicações web modernas',
    'ivo netto',
    'netto codes'
  ],
  authors: [{ name: 'Ivo Netto', url: 'https://netto.codes' }],
  creator: 'Ivo Netto',
  publisher: 'Netto.codes',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://netto.codes'),
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/pt-br',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://netto.codes',
    title: 'Netto.codes - Desenvolvedor Full Stack | Ivo Netto',
    description: 'Desenvolvedor Full Stack especialista em React, Next.js, Node.js e TypeScript. Criando soluções digitais inovadoras há 22 anos.',
    siteName: 'Netto.codes',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Netto.codes - Desenvolvedor Full Stack',
        type: 'image/jpeg',
      },
      {
        url: '/og-image-square.jpg',
        width: 1200,
        height: 1200,
        alt: 'Netto.codes - Desenvolvedor Full Stack',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Netto.codes - Desenvolvedor Full Stack | Ivo Netto',
    description: 'Desenvolvedor Full Stack especialista em React, Next.js, Node.js e TypeScript.',
    images: ['/og-image.jpg'],
    creator: '@ivonetto',
    site: '@ivonetto',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Adicione seu código do Google Search Console
    yandex: 'yandex-verification-code', // Se aplicável
    yahoo: 'yahoo-verification-code', // Se aplicável
  },
  category: 'technology',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',
  generator: 'Next.js',
  applicationName: 'Netto.codes Portfolio',
  archives: ['https://netto.codes/blog'],
  assets: ['https://netto.codes/assets'],
  bookmarks: ['https://netto.codes/projects'],
}

// Viewport otimizado
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#6366f1' },
    { media: '(prefers-color-scheme: dark)', color: '#6366f1' },
  ],
  colorScheme: 'dark light',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html 
      lang="pt-BR" 
      className={`scroll-smooth ${inter.variable} ${poppins.variable} ${montserrat.variable} ${lexendDeca.variable} ${firaCode.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/hero-bg.webp" as="image" type="image/webp" />
        <link rel="preload" href="/logo.svg" as="image" type="image/svg+xml" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://vitals.vercel-analytics.com" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Apple touch icons */}
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        
        {/* Android icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Manifest and other meta */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#6366f1" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        
        {/* Apple specific meta */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Netto.codes" />
        
        {/* Microsoft specific meta */}
        <meta name="msapplication-navbutton-color" content="#6366f1" />
        <meta name="msapplication-starturl" content="/" />
        <meta name="application-name" content="Netto.codes" />
        
        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* Performance hints */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="address=no" />
        <meta name="format-detection" content="email=no" />
        
        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ivo Netto",
              "alternateName": "Netto.codes",
              "description": "Desenvolvedor Full Stack especialista em React, Next.js, Node.js e TypeScript",
              "url": "https://netto.codes",
              "image": "https://netto.codes/profile-image.jpg",
              "jobTitle": "Desenvolvedor Full Stack",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelancer"
              },
              "knowsAbout": [
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "JavaScript",
                "Frontend Development",
                "Backend Development",
                "Full Stack Development"
              ],
              "sameAs": [
                "https://github.com/ivonetto",
                "https://linkedin.com/in/ivonetto",
                "https://twitter.com/ivonetto"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55-11-99999-9999",
                "contactType": "customer service",
                "availableLanguage": ["Portuguese", "English"]
              }
            })
          }}
        />
        
        {/* Google Analytics / Tag Manager (substitua pelo seu ID) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />
        
        {/* Microsoft Clarity (opcional) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "CLARITY_PROJECT_ID");
            `,
          }}
        />
      </head>
      <body 
        className={`
          ${inter.variable} 
          ${poppins.variable} 
          ${montserrat.variable} 
          ${lexendDeca.variable}
          ${firaCode.variable}
          antialiased
          overflow-x-hidden
        `}
        suppressHydrationWarning
      >
        {/* Fundo interativo global */}
        <div className="global-background">
          <div className="global-gradient parallax" data-speed="0.3"></div>
          {/* Partículas */}
          <div className="global-particles">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="global-particle" />
            ))}
          </div>
          {/* Formas geométricas */}
          <div className="global-geometric">
            <div className="global-geo-shape" />
            <div className="global-geo-shape" />
            <div className="global-geo-shape" />
            <div className="global-geo-shape" />
            <div className="global-geo-shape" />
            <div className="global-geo-shape" />
          </div>
        </div>
        {/* Loading fallback */}
        <noscript>
          <div className="flex items-center justify-center min-h-screen bg-background-dark text-text-primary">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">JavaScript Required</h1>
              <p>This website requires JavaScript to function properly.</p>
              <p>Por favor, habilite o JavaScript no seu navegador.</p>
            </div>
          </div>
        </noscript>

        {/* Skip to content for accessibility */}
        <a 
          href="#main-content" 
          className="
            sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
            bg-primary-color text-white px-4 py-2 rounded-md z-50
            transition-all duration-300
          "
        >
          Pular para o conteúdo principal
        </a>

        {/* Main content */}
        <div id="main-content">
          {children}
        </div>

        {/* Performance monitoring */}
        <Analytics />
        <SpeedInsights />

        {/* Service Worker registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />

        {/* Theme detection and persistence */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Theme persistence
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.setAttribute('data-theme', theme);
              } catch (e) {
                console.log('Theme detection failed:', e);
              }

              // Smooth loading animation
              window.addEventListener('load', function() {
                document.body.classList.add('loaded');
              });

              // Performance monitoring
              if ('performance' in window) {
                window.addEventListener('load', function() {
                  setTimeout(function() {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData && perfData.loadEventEnd > 0) {
                      const loadTime = perfData.loadEventEnd - perfData.fetchStart;
                      console.log('Page load time:', loadTime + 'ms');
                      
                      // Send to analytics if needed
                      if (typeof gtag !== 'undefined') {
                        gtag('event', 'page_load_time', {
                          value: Math.round(loadTime),
                          custom_parameter: 'performance_monitoring'
                        });
                      }
                    }
                  }, 0);
                });
              }

              // Error tracking
              window.addEventListener('error', function(e) {
                console.error('Global error:', e.error);
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'exception', {
                    description: e.error?.message || 'Unknown error',
                    fatal: false
                  });
                }
              });

              // Unhandled promise rejections
              window.addEventListener('unhandledrejection', function(e) {
                console.error('Unhandled promise rejection:', e.reason);
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'exception', {
                    description: e.reason?.message || 'Unhandled promise rejection',
                    fatal: false
                  });
                }
              });
            `,
          }}
        />
      </body>
    </html>
  )
}