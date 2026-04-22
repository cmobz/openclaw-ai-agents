import type { Metadata } from 'next'
import { DocLayout } from '@/components/doc-layout'
import Content from '../../../../content/appendix/troubleshooting.mdx'

export const metadata: Metadata = {
  title: 'Troubleshooting',
  description: 'Common errors and how to fix them.',
}

export default function TroubleshootingPage() {
  return (
    <DocLayout currentHref="/appendix/troubleshooting">
      <Content />
    </DocLayout>
  )
}
