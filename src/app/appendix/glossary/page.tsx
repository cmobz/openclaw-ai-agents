import type { Metadata } from 'next'
import { DocLayout } from '@/components/doc-layout'
import Content from '../../../../content/appendix/glossary.mdx'

export const metadata: Metadata = {
  title: 'Glossary',
  description: 'Plain-English definitions for every term used in this guide.',
}

export default function GlossaryPage() {
  return (
    <DocLayout currentHref="/appendix/glossary">
      <Content />
    </DocLayout>
  )
}
