import Link from 'next/link'
import { PrevNextNav } from './prev-next-nav'
import { PageToc } from './page-toc'

interface NavItem {
  href: string
  label: string
  chapter?: number
}

const guideNav: NavItem[] = [
  { href: '/guide/introduction', label: 'Introduction', chapter: 0 },
  { href: '/guide/chapter-1', label: 'Hardware + OS', chapter: 1 },
  { href: '/guide/chapter-2', label: 'OpenClaw + Jarvis + Telegram', chapter: 2 },
  { href: '/guide/chapter-3', label: 'Adding Stark, Sherlock, Shakespeare', chapter: 3 },
  { href: '/guide/chapter-4', label: 'Mission Control', chapter: 4 },
  { href: '/guide/chapter-5', label: 'Daily Automations + Cron', chapter: 5 },
]

const appendixNav: NavItem[] = [
  { href: '/appendix/agent-catalog', label: 'Agent Catalog' },
  { href: '/appendix/cron-reference', label: 'Cron Reference' },
  { href: '/appendix/troubleshooting', label: 'Troubleshooting' },
  { href: '/appendix/mission-control-persistence', label: 'Mission Control Persistence' },
  { href: '/appendix/glossary', label: 'Glossary' },
  { href: '/appendix/secret-rotation', label: 'Secret Rotation' },
  { href: '/appendix/further-reading', label: 'Further Reading' },
]

interface DocLayoutProps {
  children: React.ReactNode
  currentHref?: string
}

export function DocLayout({ children, currentHref }: DocLayoutProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        {/* Left sidebar */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-24 space-y-6">
            <nav>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">Guide</p>
              <ul className="space-y-1">
                {guideNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                        currentHref === item.href
                          ? 'bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 font-medium'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      {item.chapter !== undefined && (
                        <span className="text-xs font-mono text-slate-400 dark:text-slate-500 w-4">
                          {item.chapter}
                        </span>
                      )}
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">Appendix</p>
              <ul className="space-y-1">
                {appendixNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                        currentHref === item.href
                          ? 'bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 font-medium'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <div className="min-w-0 flex-1">
          <article className="prose prose-slate dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-a:text-sky-600 dark:prose-a:text-sky-400 prose-code:text-sky-600 dark:prose-code:text-sky-400 prose-pre:p-0 prose-pre:bg-transparent">
            {children}
          </article>
          <PrevNextNav currentHref={currentHref} />
        </div>

        {/* Right TOC rail */}
        <aside className="hidden lg:block w-56 shrink-0">
          <div className="sticky top-24">
            <PageToc />
          </div>
        </aside>
      </div>
    </div>
  )
}
