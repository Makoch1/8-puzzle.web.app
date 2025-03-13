import { createFileRoute } from '@tanstack/react-router'
import { ComingSoon } from '../components/ComingSoon'

export const Route = createFileRoute('/daily')({
  component: () => <ComingSoon featureName='Daily Puzzles' />,
})

