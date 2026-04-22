'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'

interface SearchDoc {
  id: number
  title: string
  slug: string
  body: string
}

interface SearchResult {
  id: number
  title: string
  slug: string
  excerpt: string
}

type FlexIndex = {
  add: (doc: SearchDoc) => void
  search: (q: string, opts?: { enrich?: boolean; limit?: number }) => Array<{ field: string; result: Array<{ id: number; doc: SearchDoc }> }>
}

export function SiteSearch() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle')
  const inputRef = useRef<HTMLInputElement>(null)
  const indexRef = useRef<FlexIndex | null>(null)
  const router = useRouter()

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(v => !v)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => {
    if (open) inputRef.current?.focus()
    else { setQuery(''); setResults([]) }
  }, [open])

  const buildIndex = useCallback(async () => {
    if (indexRef.current) return
    setStatus('loading')
    try {
      const [{ Document }, res] = await Promise.all([
        import('flexsearch'),
        fetch('/search-index.json'),
      ])
      if (!res.ok) throw new Error('index fetch failed')
      const docs: SearchDoc[] = await res.json()

      const idx = new Document({
        document: { id: 'id', index: ['title', 'body'], store: true },
        tokenize: 'forward',
      }) as unknown as FlexIndex

      for (const doc of docs) idx.add(doc)
      indexRef.current = idx
      setStatus('ready')
    } catch {
      setStatus('error')
    }
  }, [])

  useEffect(() => {
    if (!open || status !== 'idle') return
    buildIndex()
  }, [open, status, buildIndex])

  useEffect(() => {
    if (!query.trim() || !indexRef.current) { setResults([]); return }
    const idx = indexRef.current
    const raw = idx.search(query, { enrich: true, limit: 10 })
    const seen = new Set<number>()
    const out: SearchResult[] = []
    for (const fieldResult of raw) {
      for (const r of fieldResult.result) {
        if (seen.has(r.id)) continue
        seen.add(r.id)
        const doc = r.doc as SearchDoc
        const q = query.toLowerCase()
        const bodyIdx = doc.body.toLowerCase().indexOf(q)
        const excerpt = bodyIdx >= 0
          ? '…' + doc.body.slice(Math.max(0, bodyIdx - 40), bodyIdx + 120).trim() + '…'
          : doc.body.slice(0, 120).trim() + '…'
        out.push({ id: doc.id, title: doc.title, slug: doc.slug, excerpt })
        if (out.length >= 10) break
      }
      if (out.length >= 10) break
    }
    setResults(out)
  }, [query])

  const go = (slug: string) => {
    setOpen(false)
    router.push(slug)
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
        aria-label="Search (Ctrl+K)"
      >
        <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden sm:inline text-xs text-slate-400 dark:text-slate-500 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded px-1 py-0.5">⌘K</kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-200 dark:border-slate-700">
              <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search the guide…"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter' && results[0]) go(results[0].slug) }}
                className="flex-1 bg-transparent text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm outline-none"
              />
              {status === 'loading' && (
                <span className="text-xs text-slate-400 dark:text-slate-500">Loading…</span>
              )}
              <kbd className="text-xs text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded px-1 py-0.5">Esc</kbd>
            </div>

            {status === 'error' && (
              <p className="px-4 py-3 text-sm text-amber-600 dark:text-amber-400">
                Search index unavailable — run <code className="font-mono">npm run build</code> first.
              </p>
            )}

            {results.length > 0 && (
              <ul className="max-h-96 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800">
                {results.map(r => (
                  <li key={r.id}>
                    <button
                      className="w-full text-left px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                      onClick={() => go(r.slug)}
                    >
                      <div className="text-sm font-medium text-slate-900 dark:text-white">{r.title}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">{r.excerpt}</div>
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {query && status === 'ready' && results.length === 0 && (
              <p className="px-4 py-6 text-sm text-center text-slate-500 dark:text-slate-400">
                No results for &ldquo;{query}&rdquo;
              </p>
            )}

            {!query && status === 'ready' && (
              <p className="px-4 py-6 text-sm text-center text-slate-400 dark:text-slate-500">
                Start typing to search…
              </p>
            )}
          </div>
        </div>
      )}
    </>
  )
}
