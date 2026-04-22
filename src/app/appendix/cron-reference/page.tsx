import type { Metadata } from 'next'
import { DocLayout } from '@/components/doc-layout'
import Content from '../../../../content/appendix/cron-reference.mdx'

export const metadata: Metadata = {
  title: 'Cron Reference',
  description: 'Every scheduled job, when it runs, and how to change it.',
}

export default function CronReferencePage() {
  return (
    <DocLayout currentHref="/appendix/cron-reference">
      <Content />
    </DocLayout>
  )
}
