export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/', '/login/'],
    },
    sitemap: 'https://almuxtaardev.vercel.app/sitemap.xml',
  }
}
