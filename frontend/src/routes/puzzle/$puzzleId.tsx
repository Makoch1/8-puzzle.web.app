import { createFileRoute } from '@tanstack/react-router'
import { Puzzle } from '../../features/puzzle/components/Puzzle'
import { isSolvable } from '../../utils/isSolvable'

export const Route = createFileRoute('/puzzle/$puzzleId')({
  // check if it is solvable first
  loader: ({ params }) => {
    if (!isSolvable(params.puzzleId)) {
      throw new Error("Invalid puzzle")
    }
  },
  component: () => {
    const { puzzleId } = Route.useParams()

    return < Puzzle
      puzzleId={puzzleId} />
  },
  errorComponent: () => <p>Invalid puzzle ID!</p>
})

