import { createFileRoute, redirect } from '@tanstack/react-router'
import { generatePuzzleID } from '../../utils/generatePuzzleID'

/**
 * Simply redirects / forwards to a randomly generated puzzle
 */
export const Route = createFileRoute('/puzzle/')({
  loader: () => {
    throw redirect({
      to: `/puzzle/${generatePuzzleID()}`,
      throw: true,
    })
  }
})
