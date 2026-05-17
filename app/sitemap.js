export default async function sitemap() {
  const baseUrl = 'https://makhtar-portfolio.vercel.app' // TODO: Update with real URL

  // Static routes for the portfolio
  const staticRoutes = [
    '',
    '/work',
    '/services',
    '/about',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))

  return [...staticRoutes]
}
