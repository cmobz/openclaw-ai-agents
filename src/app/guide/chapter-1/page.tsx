import type { Metadata } from 'next'
import { DocLayout } from '@/components/doc-layout'
import Content from '../../../../content/guide/chapter-1.mdx'

export const metadata: Metadata = {
  title: 'Chapter 1: Hardware + OS',
  description: 'Buy the right hardware, install Raspberry Pi OS, and secure your new machine.',
}

export default function Chapter1Page() {
  return (
    <DocLayout currentHref="/guide/chapter-1">
      <Content />
    </DocLayout>
  )
}
