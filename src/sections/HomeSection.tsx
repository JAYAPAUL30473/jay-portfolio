import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Brain, Code2, Download } from 'lucide-react'
import type { ReactNode } from 'react'
import { profile } from '../data/portfolio'

function FloatingCard({ className, icon, title, subtitle }: { className: string; icon: ReactNode; title: string; subtitle: string }) {
  return <div className={`absolute flex items-center gap-2 border border-slate-200 bg-white/85 p-2.5 text-xs shadow-xl backdrop-blur dark:border-slate-700 dark:bg-slate-900/85 ${className}`}><span className="text-cyan-500">{icon}</span><span>{title}<br /><b>{subtitle}</b></span></div>
}

export function HomeSection() {
  return <section id="home"><div className="mx-auto grid min-h-[calc(100vh-74px)] w-[min(1160px,calc(100%-32px))] items-center gap-12 py-16 md:grid-cols-[1.1fr_.9fr]">
    <motion.div initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .6 }}>
      <p className="font-display text-[11px] font-bold tracking-[.16em] text-cyan-500">AVAILABLE FOR IMPACTFUL OPPORTUNITIES</p><p className="mt-7 text-lg text-slate-500 dark:text-slate-400">Hi, I’m</p>
      <h1 className="mt-1 font-display text-5xl font-bold leading-[.95] tracking-[-.06em] sm:text-7xl">Sakhamuri<br /><span className="text-cyan-500">Jayapaul Naidu.</span></h1><h2 className="mt-6 font-display text-lg font-semibold">Project Engineer <span className="text-cyan-500">@ Wipro</span></h2>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">I build <b className="text-slate-900 dark:text-white">AI-powered applications</b> and scalable software solutions with Python, cloud, and modern web technologies.</p>
      <div className="mt-8 flex flex-wrap gap-3"><a className="button-primary" href="#projects">View my work <ArrowDown size={17} /></a><a className="button-secondary" href={`${import.meta.env.BASE_URL}JAY.pdf`} download>Download resume <Download size={17} /></a></div>
      <div className="mt-9 flex gap-5 text-sm font-bold"><a className="inline-link" href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a><a className="inline-link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} /></a></div>
    </motion.div>
    <motion.div className="relative mx-auto grid h-[390px] w-[300px] place-items-center sm:h-[460px] sm:w-[380px]" initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7 }}><div className="absolute h-[86%] w-[86%] animate-[spin_28s_linear_infinite] rounded-full border border-dashed border-cyan-400/40" /><div className="h-[71%] w-[71%] overflow-hidden rounded-full border-2 border-cyan-400 p-2 shadow-[0_0_50px_rgba(6,182,212,.25)]"><img className="h-full w-full rounded-full object-cover object-[50%_25%]" src={`${import.meta.env.BASE_URL}img/jay3.jpg`} alt="Sakhamuri Jayapaul Naidu" /></div><FloatingCard className="right-0 top-10" icon={<Brain size={22} />} title="AI & ML" subtitle="Engineer" /><FloatingCard className="bottom-10 left-0" icon={<Code2 size={22} />} title="Python" subtitle="Developer" /></motion.div>
  </div><Stats /></section>
}

function Stats() { return <section className="border-y border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900/30"><div className="mx-auto grid w-[min(1160px,calc(100%-32px))] grid-cols-2 md:grid-cols-4">{[['5+', 'Projects built'], ['5+', 'Certifications'], ['2025', 'CSE (AI & IPA) graduate'], ['∞', 'Curiosity to learn']].map(([number, label]) => <div key={label} className="border-r border-slate-200 p-5 last:border-r-0 dark:border-slate-700"><b className="font-display text-2xl">{number}</b><p className="m-0 text-xs text-slate-500 dark:text-slate-400">{label}</p></div>)}</div></section> }
