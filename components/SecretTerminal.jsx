'use client'
import { useEffect, useState, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { TerminalIcon, XIcon } from 'lucide-react'

const SEQUENCE = ['m', 'a', 'k', 'h', 't', 'a', 'r']

const LINES = [
    { text: '> Initialisation du profil AlmuxtaarDev...', delay: 0 },
    { text: '> Chargement des données...', delay: 400 },
    { text: '> Compétences: [████████████] 100%', delay: 800 },
    { text: '> React ✓  |  Next.js ✓  |  TypeScript ✓', delay: 1200 },
    { text: '> Figma ✓  |  Supabase ✓  |  Node.js ✓', delay: 1600 },
    { text: '> Fondateur JULO  ✓  |  13 Projets livrés ✓', delay: 2100 },
    { text: '─────────────────────────────────────', delay: 2600 },
    { text: '> Statut : DISPONIBLE POUR EMBAUCHE', delay: 3000, highlight: true },
    { text: '> Contact : makhtar2gsm@gmail.com', delay: 3500 },
    { text: '> Portfolio : almuxtaardev.vercel.app', delay: 3800 },
    { text: '─────────────────────────────────────', delay: 4200 },
    { text: '> Ce développeur pense différemment. 🚀', delay: 4600, highlight: true },
]

export default function SecretTerminal() {
    const [isOpen, setIsOpen] = useState(false)
    const [visibleLines, setVisibleLines] = useState([])
    const sequenceRef = useRef([])
    const timersRef = useRef([])

    useEffect(() => {
        const onKey = (e) => {
            if (isOpen) return
            const key = e.key.toLowerCase()
            if (key === SEQUENCE[sequenceRef.current.length]) {
                sequenceRef.current.push(key)
                if (sequenceRef.current.length === SEQUENCE.length) {
                    sequenceRef.current = []
                    setIsOpen(true)
                }
            } else {
                // Check if this key starts a new sequence
                sequenceRef.current = key === SEQUENCE[0] ? [key] : []
            }
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [isOpen])

    useEffect(() => {
        if (!isOpen) {
            setVisibleLines([])
            timersRef.current.forEach(clearTimeout)
            return
        }

        setVisibleLines([])
        LINES.forEach((line, i) => {
            const t = setTimeout(() => {
                setVisibleLines((prev) => [...prev, line])
            }, line.delay)
            timersRef.current.push(t)
        })

        return () => timersRef.current.forEach(clearTimeout)
    }, [isOpen])

    const close = () => setIsOpen(false)

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={close}
                        className="fixed inset-0 z-[10000] bg-black/70 backdrop-blur-sm"
                    />

                    {/* Terminal window */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed inset-0 z-[10001] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="pointer-events-auto w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10"
                            style={{ background: '#0a0804' }}>

                            {/* Title bar */}
                            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10"
                                style={{ background: '#140f08' }}>
                                <div className="flex items-center gap-2">
                                    <TerminalIcon size={14} className="text-amber-400" />
                                    <span className="text-xs font-mono text-amber-400/80 font-bold tracking-wider">
                                        almuxtaar@portfolio ~ %
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {/* Traffic lights */}
                                    <div className="size-3 rounded-full bg-red-500/80" />
                                    <div className="size-3 rounded-full bg-yellow-500/80" />
                                    <div className="size-3 rounded-full bg-green-500/80" />
                                    <button onClick={close}
                                        className="ml-2 text-white/30 hover:text-white/80 transition-colors">
                                        <XIcon size={14} />
                                    </button>
                                </div>
                            </div>

                            {/* Terminal content */}
                            <div className="p-6 font-mono text-sm space-y-1.5 min-h-[300px]">
                                <p className="text-amber-400/60 text-xs mb-4">
                                    Last login: {new Date().toLocaleString('fr-FR')} on ttys001
                                </p>
                                {visibleLines.map((line, i) => (
                                    <motion.p
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className={
                                            line.highlight
                                                ? 'font-bold'
                                                : 'text-green-400/80'
                                        }
                                        style={
                                            line.highlight
                                                ? { color: '#d9a54e' }
                                                : {}
                                        }
                                    >
                                        {line.text}
                                    </motion.p>
                                ))}
                                {/* Blinking cursor */}
                                <motion.span
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                    className="inline-block w-2 h-4 bg-amber-400 align-middle"
                                />
                            </div>

                            {/* Footer hint */}
                            <div className="px-6 py-3 border-t border-white/5 text-center">
                                <p className="text-white/20 text-[10px] font-mono tracking-widest uppercase">
                                    Tapez "makhtar" pour ouvrir · ESC ou cliquer dehors pour fermer
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
