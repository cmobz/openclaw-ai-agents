import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guide',
  description: 'Complete guide to building your personal AI agent team on a Raspberry Pi 5.',
}

const chapters = [
  { href: '/guide/introduction', num: 0, title: 'Introduction', desc: 'What OpenClaw is, what you\'ll build, and how to use this guide.', duration: '~15 min', difficulty: 'beginner' },
  { href: '/guide/chapter-1', num: 1, title: 'Hardware + OS', desc: 'Buy the right hardware, install Raspberry Pi OS, and secure your new machine.', duration: '~2 hours', difficulty: 'beginner' },
  { href: '/guide/chapter-2', num: 2, title: 'OpenClaw + Jarvis + Telegram', desc: 'Install OpenClaw, meet Jarvis, and send your first Telegram message to your AI.', duration: '~3 hours', difficulty: 'beginner' },
  { href: '/guide/chapter-3', num: 3, title: 'Adding Stark, Sherlock, Shakespeare', desc: 'Expand your team with a coder, a researcher, and a writer.', duration: '~2 hours', difficulty: 'beginner' },
  { href: '/guide/chapter-4', num: 4, title: 'Mission Control', desc: 'Deploy the local web dashboard to monitor your agents and their work.', duration: '~1 hour', difficulty: 'beginner' },
  { href: '/guide/chapter-5', num: 5, title: 'Daily Automations + Cron', desc: 'Set up morning briefings, evening summaries, and keep your team busy.', duration: '~1 hour', difficulty: 'beginner' },
]

const appendix = [
  { href: '/appendix/agent-catalog', title: 'Agent Catalog', desc: 'All available agents and their capabilities.' },
  { href: '/appendix/cron-reference', title: 'Cron Reference', desc: 'Every scheduled job, when it runs, and how to change it.' },
  { href: '/appendix/troubleshooting', title: 'Troubleshooting', desc: 'Common errors and how to fix them.' },
  { href: '/appendix/mission-control-persistence', title: 'Mission Control Persistence', desc: 'Keep the dashboard alive across SSH drops and Pi reboots.' },
  { href: '/appendix/glossary', title: 'Glossary', desc: 'Plain-English definitions for every term used in this guide.' },
  { href: '/appendix/secret-rotation', title: 'Secret Rotation', desc: 'How to rotate API keys and tokens safely.' },
  { href: '/appendix/further-reading', title: 'Further Reading', desc: 'Go deeper: books, papers, and projects to explore next.' },
]

export default function GuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">The OpenClaw Setup Guide</h1>
      <p className="text-lg text-slate-500 dark:text-slate-400 mb-12">Six chapters. One Raspberry Pi. Your own AI team.</p>

      <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Chapters</h2>
      <div className="space-y-3 mb-12">
        {chapters.map((ch) => (
          <Link key={ch.href} href={ch.href} className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-sky-200 dark:hover:border-sky-800 hover:bg-sky-50/50 dark:hover:bg-sky-950/30 transition-colors group">
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-mono text-sm font-bold text-slate-500 dark:text-slate-400 group-hover:bg-sky-100 dark:group-hover:bg-sky-900 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
              {ch.num}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-semibold text-slate-900 dark:text-white">{ch.title}</h3>
                <span className="text-xs text-slate-400 dark:text-slate-500">{ch.duration}</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">{ch.desc}</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-300 dark:text-slate-600 group-hover:text-sky-400 transition-colors flex-shrink-0 mt-2.5" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
            </svg>
          </Link>
        ))}
      </div>

      <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Appendix</h2>
      <div className="grid sm:grid-cols-2 gap-3">
        {appendix.map((item) => (
          <Link key={item.href} href={item.href} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-sky-200 dark:hover:border-sky-800 hover:bg-sky-50/50 dark:hover:bg-sky-950/30 transition-colors group">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-1 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">{item.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
