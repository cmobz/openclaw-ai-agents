import Link from 'next/link'

const navOrder = [
  { href: '/guide/introduction', label: 'Introduction', chapter: 'Intro' },
  { href: '/guide/chapter-1', label: 'Hardware + OS', chapter: 'Ch. 1' },
  { href: '/guide/chapter-2', label: 'OpenClaw + Jarvis + Telegram', chapter: 'Ch. 2' },
  { href: '/guide/chapter-3', label: 'Adding Stark, Sherlock, Shakespeare', chapter: 'Ch. 3' },
  { href: '/guide/chapter-4', label: 'Mission Control', chapter: 'Ch. 4' },
  { href: '/guide/chapter-5', label: 'Daily Automations + Cron', chapter: 'Ch. 5' },
]

interface PrevNextNavProps {
  currentHref?: string
}

export function PrevNextNav({ currentHref }: PrevNextNavProps) {
  const idx = navOrder.findIndex(item => item.href === currentHref)
  if (idx === -1) return null

  const prev = idx > 0 ? navOrder[idx - 1] : null
  const next = idx < navOrder.length - 1 ? navOrder[idx + 1] : null

  return (
    <nav className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex gap-4">
      {prev ? (
        <Link
          href={prev.href}
          className="group flex-1 flex flex-col gap-1 p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-sky-300 dark:hover:border-sky-700 hover:bg-sky-50 dark:hover:bg-sky-950/30 transition-colors no-underline"
        >
          <span className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider">← Previous</span>
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
            <span className="text-slate-400 dark:text-slate-500 mr-1.5">{prev.chapter}</span>
            {prev.label}
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {next ? (
        <Link
          href={next.href}
          className="group flex-1 flex flex-col gap-1 p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-sky-300 dark:hover:border-sky-700 hover:bg-sky-50 dark:hover:bg-sky-950/30 transition-colors text-right no-underline"
        >
          <span className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-wider">Next →</span>
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
            {next.label}
            <span className="text-slate-400 dark:text-slate-500 ml-1.5">{next.chapter}</span>
          </span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  )
}
