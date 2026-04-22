import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white dark:from-slate-900 dark:to-slate-950 py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 dark:bg-sky-950 px-4 py-1.5 text-sm text-sky-700 dark:text-sky-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
            Free, open-source, beginner-friendly
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            Build Your Own<br />
            <span className="text-sky-500">AI Agent Team</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            A beginner&apos;s guide to running a personal AI system on a Raspberry Pi 5. No cloud fees. No vendor lock-in. Just your own team of AI agents working for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/guide/chapter-1"
              className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg"
            >
              Start Chapter 1
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
              </svg>
            </Link>
            <Link
              href="/guide"
              className="inline-flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg"
            >
              See all chapters
            </Link>
          </div>
        </div>
      </section>

      {/* What you'll build */}
      <section className="py-20 px-4 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-4">What you&apos;ll build</h2>
          <p className="text-center text-slate-500 dark:text-slate-400 mb-12 max-w-xl mx-auto">By the end of this guide, you&apos;ll have a fully running personal AI system on a $90 Raspberry Pi.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Telegram Interface', desc: 'Chat with your AI team via Telegram. Ask questions, get summaries, run commands — from anywhere.', icon: '💬' },
              { title: 'Mission Control', desc: 'A local web dashboard showing all your agents, their tasks, activity feed, and system health.', icon: '🎛️' },
              { title: 'Daily Briefings', desc: 'Morning and evening briefings delivered automatically — news, tasks, weather, and your schedule.', icon: '📋' },
              { title: 'Agent Team', desc: 'Jarvis orchestrates. Stark codes. Sherlock researches. Shakespeare writes. Your team, your rules.', icon: '🤖' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 dark:border-slate-800 p-6 hover:border-sky-200 dark:hover:border-sky-800 transition-colors">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                {/* Screenshot placeholder */}
                <div className="mt-4 aspect-video rounded-md bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <span className="text-xs text-slate-400">Screenshot coming soon</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-4">Who this is for</h2>
          <p className="text-center text-slate-500 dark:text-slate-400 mb-12">Complete beginners welcome. Seriously.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { emoji: '✅', title: 'You\'ve used a terminal before', desc: 'Even just cd and ls. That\'s enough to start.' },
              { emoji: '✅', title: 'You own a Raspberry Pi 5', desc: 'Or you\'re thinking about buying one. ($90 is all it costs.)' },
              { emoji: '✅', title: 'You\'re curious about AI', desc: 'You don\'t need to know how LLMs work — just want to use them.' },
            ].map((item) => (
              <div key={item.title} className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
                <div className="text-2xl mb-3">{item.emoji}</div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-sky-500 dark:bg-sky-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to build your AI team?</h2>
        <p className="text-sky-100 mb-8 text-lg">Built with OpenClaw, Claude Code, Qwen, DeepSeek, and a lot of coffee.</p>
        <Link
          href="/guide/chapter-1"
          className="inline-flex items-center gap-2 bg-white text-sky-600 hover:bg-sky-50 font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg"
        >
          Start Chapter 1 →
        </Link>
      </section>
    </div>
  )
}
