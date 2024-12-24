import { createFileRoute } from '@tanstack/react-router'
import { Puzzle } from '../../features/puzzle/components/Puzzle'
import { isSolvable } from '../../utils/isSolvable'
import axios from 'axios'

export const Route = createFileRoute('/puzzle/$puzzleId')({
  // check if it is solvable first
  loader: ({ params }) => {
    if (!isSolvable(params.puzzleId)) {
      throw new Error("Invalid puzzle")
    }

    // add puzzle_id to backend
    const uri = `${import.meta.env.VITE_API_URI}/puzzle/${params.puzzleId}`
    try {
      axios.post(uri);
    } catch (e) { };
  },
  component: () => {
    const { puzzleId } = Route.useParams()

    return < Puzzle puzzleId={puzzleId} />
  },
  errorComponent: () => <p>Invalid puzzle ID!</p>
})

