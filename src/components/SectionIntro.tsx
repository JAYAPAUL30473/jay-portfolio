import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type SectionIntroProps = { label: string; title: ReactNode; description: string }

export function SectionIntro({ label, title, description }: SectionIntroProps) {
  return <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
    <p className="font-display text-[11px] font-bold tracking-[.16em] text-cyan-500">{label}</p>
    <h1 className="mt-3 font-display text-5xl font-bold leading-[1.04] tracking-[-.05em] sm:text-6xl">{title}</h1>
    <p className="mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-300">{description}</p>
  </motion.div>
}
