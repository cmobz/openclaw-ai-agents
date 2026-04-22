import type { Metadata } from 'next'
import { DocLayout } from '@/components/doc-layout'
import Content from '../../../../content/guide/chapter-2.mdx'

export const metadata: Metadata = {
  title: 'Chapter 2: OpenClaw + Jarvis + Telegram',
  description: 'Install OpenClaw, meet Jarvis, and send your first Telegram message to your AI.',
}

export default function Chapter2Page() {
  return (
    <DocLayout currentHref="/guide/chapter-2">
      <Content />
    </DocLayout>
  )
}
