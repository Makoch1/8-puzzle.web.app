import { createFileRoute } from '@tanstack/react-router'
import { ComingSoon } from '../components/ComingSoon'

export const Route = createFileRoute('/leaderboards')({
    component: () => <ComingSoon featureName='Leaderboards' />,
})

