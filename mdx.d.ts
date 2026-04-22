declare module '*.mdx' {
  import type { MDXProps } from 'mdx/types'
  export default function MDXContent(props: MDXProps): JSX.Element
}

declare module '*.css' {
  const content: { [className: string]: string }
  export default content
}
