'use client'
import { useEffect, useRef, useState } from 'react'

const TRAIL_LENGTH = 8

export default function CustomCursor() {
    const cursorRef = useRef(null)
    const trailRefs = useRef([])
    const posRef = useRef({ x: -100, y: -100 })
    const trailPosRef = useRef(Array(TRAIL_LENGTH).fill({ x: -100, y: -100 }))
    const rafRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        // Only show on non-touch devices
        if (window.matchMedia('(pointer: coarse)').matches) return

        const onMove = (e) => {
            posRef.current = { x: e.clientX, y: e.clientY }
            if (!isVisible) setIsVisible(true)
        }

        const onEnter = () => setIsVisible(true)
        const onLeave = () => setIsVisible(false)

        const onHoverStart = (e) => {
            if (e.target.closest('a, button, [role="button"]')) {
                setIsHovering(true)
            }
        }
        const onHoverEnd = () => setIsHovering(false)

        document.addEventListener('mousemove', onMove)
        document.addEventListener('mouseenter', onEnter)
        document.addEventListener('mouseleave', onLeave)
        document.addEventListener('mouseover', onHoverStart)
        document.addEventListener('mouseout', onHoverEnd)

        const animate = () => {
            // Update trail positions with smooth lag
            const prev = [posRef.current, ...trailPosRef.current.slice(0, TRAIL_LENGTH - 1)]
            trailPosRef.current = prev

            // Move cursor
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px)`
            }

            // Move trail
            trailRefs.current.forEach((el, i) => {
                if (!el) return
                const pos = trailPosRef.current[i]
                const scale = 1 - (i / TRAIL_LENGTH) * 0.7
                const opacity = (1 - i / TRAIL_LENGTH) * 0.5
                el.style.transform = `translate(${pos.x}px, ${pos.y}px) scale(${scale})`
                el.style.opacity = opacity
            })

            rafRef.current = requestAnimationFrame(animate)
        }

        rafRef.current = requestAnimationFrame(animate)

        return () => {
            document.removeEventListener('mousemove', onMove)
            document.removeEventListener('mouseenter', onEnter)
            document.removeEventListener('mouseleave', onLeave)
            document.removeEventListener('mouseover', onHoverStart)
            document.removeEventListener('mouseout', onHoverEnd)
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
        }
    }, [])

    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
        return null
    }

    return (
        <>
            {/* Custom cursor dot */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
                style={{ willChange: 'transform' }}
            >
                <div
                    className="transition-all duration-200"
                    style={{
                        width: isHovering ? '40px' : '14px',
                        height: isHovering ? '40px' : '14px',
                        borderRadius: '50%',
                        background: isHovering
                            ? 'transparent'
                            : 'radial-gradient(circle, #d9a54e, #c2773a)',
                        border: isHovering ? '2px solid #d9a54e' : 'none',
                        opacity: isVisible ? 1 : 0,
                        boxShadow: isHovering ? '0 0 20px rgba(217,165,78,0.4)' : '0 0 8px rgba(217,165,78,0.6)',
                    }}
                />
            </div>

            {/* Trail particles */}
            {Array.from({ length: TRAIL_LENGTH }).map((_, i) => (
                <div
                    key={i}
                    ref={(el) => (trailRefs.current[i] = el)}
                    className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full"
                    style={{
                        width: '10px',
                        height: '10px',
                        background: `radial-gradient(circle, #d9a54e, #c2773a)`,
                        willChange: 'transform, opacity',
                    }}
                />
            ))}

            {/* Hide native cursor globally */}
            <style jsx global>{`
                *, *::before, *::after {
                    cursor: none !important;
                }
            `}</style>
        </>
    )
}
