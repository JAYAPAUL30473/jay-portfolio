import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navigation } from '../data/portfolio'
import { ThemeToggle } from './ThemeToggle'

type HeaderProps = { isDark: boolean; onThemeToggle: () => void }

export function Header({ isDark, onThemeToggle }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)

  return <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-slate-50/80 backdrop-blur dark:border-slate-700/50 dark:bg-ink/80">
    <nav className="mx-auto flex h-[74px] w-[min(1160px,calc(100%-32px))] items-center justify-between">
      <a href="#home" className="font-display text-xl font-bold tracking-tight">JP<span className="text-cyan-500">.</span>Naidu</a>
      <div className="hidden items-center gap-6 md:flex">{navigation.map(item => <a key={item.href} href={item.href} className="text-sm font-semibold text-slate-500 transition hover:text-cyan-500 dark:text-slate-300">{item.label}</a>)}<ThemeToggle isDark={isDark} onToggle={onThemeToggle} /></div>
      <div className="flex items-center gap-3 md:hidden"><ThemeToggle isDark={isDark} onToggle={onThemeToggle} /><button onClick={() => setIsMenuOpen(open => !open)} aria-label="Toggle menu">{isMenuOpen ? <X /> : <Menu />}</button></div>
    </nav>
    {isMenuOpen && <div className="border-t border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-ink md:hidden">{navigation.map(item => <a key={item.href} href={item.href} onClick={closeMenu} className="block py-3 font-semibold">{item.label}</a>)}</div>}
  </header>
}
