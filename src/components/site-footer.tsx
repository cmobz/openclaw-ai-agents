export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
        <p>Built with OpenClaw, Claude Code, Qwen, DeepSeek, and a lot of coffee.</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/openclaw-ai/openclaw/issues/new" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Open a GitHub Issue
          </a>
        </div>
      </div>
    </footer>
  )
}
