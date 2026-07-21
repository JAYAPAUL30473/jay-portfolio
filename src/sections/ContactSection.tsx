import { useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowUpRight, BriefcaseBusiness, Code2, Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '../data/portfolio'
import { SectionIntro } from '../components/SectionIntro'

export function ContactSection() {
  const [status, setStatus] = useState('')
  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('from_name') ?? '')
    const email = String(form.get('reply_to') ?? '')
    const message = String(form.get('message') ?? '')
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setStatus('Opening your email app…')
  }
  const contactItems = [[Mail, profile.email, `mailto:${profile.email}`], [Phone, profile.phone, '#'], [BriefcaseBusiness, 'LinkedIn', profile.linkedin], [Code2, 'GitHub', profile.github], [MapPin, profile.location, '#']] as const
  return <section id="contact" className="mx-auto min-h-[calc(100vh-74px)] w-[min(1160px,calc(100%-32px))] py-20"><SectionIntro label="04 / CONTACT" title={<>Let’s build something <em>meaningful.</em></>} description="I’m always open to discussing software, AI, and new opportunities." /><div className="mt-14 grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div className="space-y-6">{contactItems.map(([Icon, text, href]) => <a className="flex items-center gap-4 text-slate-600 transition hover:text-cyan-500 dark:text-slate-300" href={href} key={text} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"><span className="rounded-full border border-slate-200 p-3 text-cyan-500 dark:border-slate-700"><Icon size={20} /></span><span>{text}</span></a>)}</div><form onSubmit={sendMessage} className="grid gap-4 border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"><label>Name<input required name="from_name" placeholder="Your name" /></label><label>Email<input required type="email" name="reply_to" placeholder="you@example.com" /></label><label>Message<textarea required name="message" rows={5} placeholder="Tell me about your project or opportunity" /></label><button className="button-primary w-fit" type="submit">Send message <ArrowUpRight size={17} /></button>{status && <p className="text-sm text-cyan-600 dark:text-cyan-400">{status}</p>}</form></div></section>
}
