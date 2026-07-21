import { Moon, Sun } from 'lucide-react'

type ThemeToggleProps = { isDark: boolean; onToggle: () => void }

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return <button onClick={onToggle} className="rounded-full border border-slate-300 p-2 text-slate-600 transition hover:border-cyan-500 hover:text-cyan-500 dark:border-slate-700 dark:text-slate-200" aria-label="Toggle colour theme">{isDark ? <Sun size={17} /> : <Moon size={17} />}</button>
}
