'use client'
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import posthog from 'posthog-js'

export default function PostHogEvents() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.posthog.com',
        capture_pageview: false // We manual capture to ensure SPA works
      })
    }
  }, [])

  useEffect(() => {
    if (pathname && typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      let url = window.origin + pathname
      if (searchParams.toString()) {
        url = url + `?${searchParams.toString()}`
      }
      posthog.capture('$pageview', {
        '$current_url': url,
      })
    }
  }, [pathname, searchParams])

  return null
}

// Utility to track events
export const trackEvent = (eventName, properties = {}) => {
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
        posthog.capture(eventName, properties);
    }
}
