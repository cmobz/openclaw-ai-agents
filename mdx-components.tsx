import type { MDXComponents } from 'mdx/types'
import { Screenshot } from '@/components/screenshot'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Screenshot,
    ...components,
  }
}
