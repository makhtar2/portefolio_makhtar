export default async function sitemap() {
  const baseUrl = 'https://almuxtaardev.vercel.app'
  
  // Static routes for the portfolio
  const staticRoutes = [
    '',
    '/about',
    '/work',
    '/services',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))

  return [...staticRoutes]
}
