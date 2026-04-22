import type { Metadata } from 'next'
import { DocLayout } from '@/components/doc-layout'
import Content from '../../../../content/appendix/further-reading.mdx'

export const metadata: Metadata = {
  title: 'Further Reading',
  description: 'Go deeper: books, papers, and projects to explore next.',
}

export default function FurtherReadingPage() {
  return (
    <DocLayout currentHref="/appendix/further-reading">
      <Content />
    </DocLayout>
  )
}
