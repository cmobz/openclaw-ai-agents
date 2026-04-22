'use client'

import { useEffect, useState } from 'react'

interface TocItem {
  id: string
  text: string
  level: number
}

export function PageToc() {
  const [items, setItems] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll('article h2[id], article h3[id]')
    ) as HTMLElement[]

    setItems(
      headings.map(el => {
        // Clone to extract text without the anchor link '#' character
        const clone = el.cloneNode(true) as HTMLElement
        clone.querySelectorAll('a').forEach(a => a.remove())
        return {
          id: el.id,
          text: clone.textContent?.trim() ?? '',
          level: el.tagName === 'H2' ? 2 : 3,
        }
      })
    )

    // Click heading anchors to copy URL to clipboard
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('.heading-anchor') as HTMLAnchorElement | null
      if (!anchor) return
      e.preventDefault()
      const hash = anchor.getAttribute('href') ?? ''
      const url = `${location.origin}${location.pathname}${hash}`
      navigator.clipboard.writeText(url).catch(() => {})
      history.pushState(null, '', hash)
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
    }
    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  useEffect(() => {
    if (items.length === 0) return
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    )
    items.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [items])

  if (items.length === 0) return null

  return (
    <nav aria-label="Table of contents">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
        On this page
      </p>
      <ul className="space-y-1.5">
        {items.map(item => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={e => {
                e.preventDefault()
                document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                history.pushState(null, '', `#${item.id}`)
              }}
              className={`block text-sm leading-snug transition-colors ${
                item.level === 3 ? 'pl-3' : ''
              } ${
                activeId === item.id
                  ? 'text-sky-500 dark:text-sky-400 font-medium'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
