/**
 * Checks two 2D boards if they are equal.
 * Equal in this context means:
 *      a) Both OUTER and INNER array lengths are equal, and
 *      b) All elements of the 2D array are equal given the same index.
 *
 * @param boardA - First board (2D array of numbers) to compare.
 * @param boardB - Second board (2D array of numbers) to compare.
 * @returns true if equal, false otherwise.
 */
export function isEqualBoard(boardA: number[][], boardB: number[][]): boolean {
    // -- check first if both are equal in size
    if (boardA.length !== boardB.length) {
        return false;
    }

    for (let i = 0; i < boardA.length; i++) {
        // -- check if inner lengths are the same
        if (boardA[i].length !== boardB[i].length) {
            return false;
        }

        for (let j = 0; j < boardA[i].length; j++) {
            if (boardA[i][j] !== boardB[i][j]) {
                return false;
            }
        }
    }

    return true;
}
