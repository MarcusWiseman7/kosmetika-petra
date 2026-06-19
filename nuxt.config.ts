const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: 'Kosmetika Petra',
  description:
    'Kosmetická ošetření, svatební a slavnostní líčení, lash lifting, laminace obočí a workshopy krásy v Lípě u Havlíčkova Brodu.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Lípa 300',
    addressLocality: 'Lípa',
    postalCode: '58257',
    addressCountry: 'CZ',
  },
  telephone: '+420726168334',
  email: 'Kosmetika_Petra@seznam.cz',
  sameAs: ['https://www.instagram.com/kosmetika_petra_lipa_/', 'https://www.facebook.com/KosmetikaPetraLipa/'],
  priceRange: '$$',
  image: 'https://www.kosmetikapetralipa.cz/images/budova.webp',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 49.55463292720196,
    longitude: 15.544382467181967,
  },
  url: 'https://www.kosmetikapetralipa.cz/',
  hasMap: 'https://maps.google.com/?q=Lípa+300,+58257+Lípa',
};

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/sitemap'],
  site: {
    url: 'https://www.kosmetikapetralipa.cz',
  },
  css: ['~/assets/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'cs' },
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
        { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
        { rel: 'icon', href: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
        { rel: 'icon', href: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
        },
      ],
      meta: [
        { name: 'msapplication-config', content: '/browserconfig.xml' },
        { name: 'theme-color', content: '#6f8b74' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Kosmetika Petra' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'cs_CZ' },
        { property: 'og:site_name', content: 'Kosmetika Petra' },
        { property: 'og:image', content: 'https://www.kosmetikapetralipa.cz/images/petra.webp' },
        { property: 'og:image:width', content: '3671' },
        { property: 'og:image:height', content: '5507' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://www.kosmetikapetralipa.cz/images/petra.webp' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(JSON_LD),
        },
      ],
    },
  },
  vite: {
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit'],
    },
  },
});
