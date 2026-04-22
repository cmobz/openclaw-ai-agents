import type { Metadata } from 'next'
import { DocLayout } from '@/components/doc-layout'
import Content from '../../../../content/guide/chapter-3.mdx'

export const metadata: Metadata = {
  title: 'Chapter 3: Adding Stark, Sherlock, Shakespeare',
  description: 'Expand your team with a coder, a researcher, and a writer.',
}

export default function Chapter3Page() {
  return (
    <DocLayout currentHref="/guide/chapter-3">
      <Content />
    </DocLayout>
  )
}
