import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomeSection } from './sections/HomeSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { AchievementsSection } from './sections/AchievementsSection'
import { ContactSection } from './sections/ContactSection'

export default function App() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-ink dark:text-slate-100">
      <Header isDark={isDark} onThemeToggle={() => setIsDark(value => !value)} />
      <main>
        <HomeSection />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
