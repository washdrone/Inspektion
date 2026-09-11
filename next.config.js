/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: '/inspektioner-med-dronare',
        destination: '/',
        permanent: true,
      },
      {
        source: '/inspektioner-med-dronare/takinspektion',
        destination: '/tjanster/takinspektion',
        permanent: true,
      },
      {
        source: '/inspektioner-med-dronare/fasadinspektion',
        destination: '/tjanster/fasadinspektion',
        permanent: true,
      },
      {
        source: '/inspektioner-med-dronare/solcellsinspektion',
        destination: '/tjanster/solcellsinspektion',
        permanent: true,
      },
      {
        source: '/inspektioner-med-dronare/byggplatsdokumentation',
        destination: '/branscher/bygg',
        permanent: true,
      },
      {
        source: '/inspektioner-med-dronare/industriell-inspektion',
        destination: '/tjanster/industriinspektion',
        permanent: true,
      },
      {
        source: '/inspektioner-med-dronare/priser',
        destination: '/priser',
        permanent: true,
      },
      {
        source: '/inspektioner-med-dronare/faq',
        destination: '/',
        permanent: true,
      },
      {
        source: '/inspektioner-med-dronare/case/takinspektion-flerbostadshus',
        destination: '/tjanster/takinspektion',
        permanent: true,
      },
      {
        source: '/inspektioner-med-dronare/case/byggplatsdokumentation-nyproduktion',
        destination: '/branscher/bygg',
        permanent: true,
      },
      {
        source: '/inspektioner-med-dronare/case/solcellsinspektion-kommersiell',
        destination: '/tjanster/solcellsinspektion',
        permanent: true,
      },
      {
        source: '/inspektioner-med-dronare/kontakt',
        destination: '/kontakt',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
