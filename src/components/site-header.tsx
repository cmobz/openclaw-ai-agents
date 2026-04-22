import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { SiteSearch } from './site-search'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg shrink-0">
          <span className="text-sky-500">OpenClaw</span>
          <span className="text-slate-400 font-normal">Setup Guide</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/guide" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Guide</Link>
          <Link href="/appendix/agent-catalog" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">Appendix</Link>
          <a href="https://github.com/openclaw-ai/openclaw" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">GitHub</a>
        </nav>
        <div className="flex items-center gap-3">
          <SiteSearch />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
