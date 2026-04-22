import type { Metadata } from 'next'
import { DocLayout } from '@/components/doc-layout'
import Content from '../../../../content/guide/introduction.mdx'

export const metadata: Metadata = {
  title: 'Introduction',
  description: 'What OpenClaw is, what you\'ll build, and how to use this guide.',
}

export default function IntroductionPage() {
  return (
    <DocLayout currentHref="/guide/introduction">
      <Content />
    </DocLayout>
  )
}
