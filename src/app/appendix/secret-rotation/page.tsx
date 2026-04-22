import type { Metadata } from 'next'
import { DocLayout } from '@/components/doc-layout'
import Content from '../../../../content/appendix/secret-rotation.mdx'

export const metadata: Metadata = {
  title: 'Secret Rotation',
  description: 'How to rotate API keys and tokens safely.',
}

export default function SecretRotationPage() {
  return (
    <DocLayout currentHref="/appendix/secret-rotation">
      <Content />
    </DocLayout>
  )
}
