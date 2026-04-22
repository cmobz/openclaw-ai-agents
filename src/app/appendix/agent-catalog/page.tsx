import type { Metadata } from 'next'
import { DocLayout } from '@/components/doc-layout'
import Content from '../../../../content/appendix/agent-catalog.mdx'

export const metadata: Metadata = {
  title: 'Agent Catalog',
  description: 'All available agents and their capabilities.',
}

export default function AgentCatalogPage() {
  return (
    <DocLayout currentHref="/appendix/agent-catalog">
      <Content />
    </DocLayout>
  )
}
