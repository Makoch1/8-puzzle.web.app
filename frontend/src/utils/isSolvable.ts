/**
 * Checks puzzle ID if it is solvable using number of inversions.
 * For each number, count the amount of 
 * numbers lower than it (i.e. count how many are out of order). That is the amount of inversions.
 * https://www.geeksforgeeks.org/check-instance-8-puzzle-solvable/ for more info.
 *
 * @param puzzleID puzzle ID string
 * @returns true if solvable, false otherwise
 */
export function isSolvable(puzzleID: string): boolean {
    let inversions = 0;

    const length = puzzleID.length
    for (let i = 0; i < length; i++) {
        const curr = Number(puzzleID[i]);

        for (let j = i + 1; j < length; j++) {
            const toCheck = Number(puzzleID[j]);

            if (curr != 0 && toCheck != 0 && curr > toCheck) {
                inversions++;
            }
        }
    }

    // if the inversions are even, it is considered to be solvable.
    return inversions % 2 == 0;
}

