import { useState } from 'react'
import type { FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { ArrowUpRight, BriefcaseBusiness, Code2, Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '../data/portfolio'
import { SectionIntro } from '../components/SectionIntro'

export function ContactSection() {
  const [status, setStatus] = useState('')
  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    if (!serviceId || !templateId || !publicKey) { setStatus('Add your EmailJS keys to a .env file to activate this form.'); return }
    try { await emailjs.sendForm(serviceId, templateId, event.currentTarget, { publicKey }); event.currentTarget.reset(); setStatus('Thanks — your message has been sent.') } catch { setStatus('Message could not be sent. Please email me directly.') }
  }
  const contactItems = [[Mail, profile.email, `mailto:${profile.email}`], [Phone, profile.phone, '#'], [BriefcaseBusiness, 'LinkedIn', profile.linkedin], [Code2, 'GitHub', profile.github], [MapPin, profile.location, '#']] as const
  return <section id="contact" className="mx-auto min-h-[calc(100vh-74px)] w-[min(1160px,calc(100%-32px))] py-20"><SectionIntro label="04 / CONTACT" title={<>Let’s build something <em>meaningful.</em></>} description="I’m always open to discussing software, AI, and new opportunities." /><div className="mt-14 grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div className="space-y-6">{contactItems.map(([Icon, text, href]) => <a className="flex items-center gap-4 text-slate-600 transition hover:text-cyan-500 dark:text-slate-300" href={href} key={text} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"><span className="rounded-full border border-slate-200 p-3 text-cyan-500 dark:border-slate-700"><Icon size={20} /></span><span>{text}</span></a>)}</div><form onSubmit={sendMessage} className="grid gap-4 border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900"><label>Name<input required name="from_name" placeholder="Your name" /></label><label>Email<input required type="email" name="reply_to" placeholder="you@example.com" /></label><label>Message<textarea required name="message" rows={5} placeholder="Tell me about your project or opportunity" /></label><button className="button-primary w-fit" type="submit">Send message <ArrowUpRight size={17} /></button>{status && <p className="text-sm text-cyan-600 dark:text-cyan-400">{status}</p>}</form></div></section>
}
