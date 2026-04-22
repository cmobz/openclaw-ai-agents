import type { Metadata } from 'next'
import { DocLayout } from '@/components/doc-layout'
import Content from '../../../../content/guide/chapter-5.mdx'

export const metadata: Metadata = {
  title: 'Chapter 5: Daily Automations + Cron',
  description: 'Set up morning briefings, evening summaries, and keep your team busy.',
}

export default function Chapter5Page() {
  return (
    <DocLayout currentHref="/guide/chapter-5">
      <Content />
    </DocLayout>
  )
}
