import type { Metadata } from 'next'
import { DocLayout } from '@/components/doc-layout'
import Content from '../../../../content/guide/chapter-4.mdx'

export const metadata: Metadata = {
  title: 'Chapter 4: Mission Control',
  description: 'Deploy the local web dashboard to monitor your agents and their work.',
}

export default function Chapter4Page() {
  return (
    <DocLayout currentHref="/guide/chapter-4">
      <Content />
    </DocLayout>
  )
}
