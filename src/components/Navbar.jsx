import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldDark = stored ? stored === 'dark' : prefersDark
    setIsDark(shouldDark)
    document.documentElement.classList.toggle('dark', shouldDark)
  }, [])

  function toggleTheme() {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-gray-950/60 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight text-lg">Photographer</Link>
        <nav className="flex items-center gap-6">
          <NavLink to="/" className={({isActive})=>`hover:opacity-80 ${isActive? 'text-blue-600 dark:text-blue-400':''}`}>Home</NavLink>
          <NavLink to="/gallery" className={({isActive})=>`hover:opacity-80 ${isActive? 'text-blue-600 dark:text-blue-400':''}`}>Gallery</NavLink>
          <NavLink to="/about" className={({isActive})=>`hover:opacity-80 ${isActive? 'text-blue-600 dark:text-blue-400':''}`}>About</NavLink>
          <NavLink to="/contact" className={({isActive})=>`hover:opacity-80 ${isActive? 'text-blue-600 dark:text-blue-400':''}`}>Contact</NavLink>
          <button onClick={toggleTheme} aria-label="Toggle dark mode" className="rounded-md border border-black/10 dark:border-white/10 px-2.5 py-1 text-sm hover:bg-black/5 dark:hover:bg-white/10">
            {isDark ? 'Light' : 'Dark'}
          </button>
        </nav>
      </div>
    </header>
  )
}


