/**
 * @param array - 2d array to search through
 * @param x - number to find
 * @returns [i, j] the element's 2d index. [-1, -1] if not found.
 */
export function search2D(array: number[][], x: number): [number, number] {
  let i: number;
  let j: number;

  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array[i].length; j++) {
      if (array[i][j] == x) {
        return [i, j];
      }
    }
  }

  return [-1, -1];  // nothing found
}
