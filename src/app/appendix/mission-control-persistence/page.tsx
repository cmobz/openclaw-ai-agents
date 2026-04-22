import type { Metadata } from 'next'
import { DocLayout } from '@/components/doc-layout'
import Content from '../../../../content/appendix/mission-control-persistence.mdx'

export const metadata: Metadata = {
  title: 'Mission Control Persistence',
  description: 'How the dashboard stays alive across SSH drops and Pi reboots, with both agent-first and shell recovery paths.',
}

export default function MissionControlPersistencePage() {
  return (
    <DocLayout currentHref="/appendix/mission-control-persistence">
      <Content />
    </DocLayout>
  )
}
