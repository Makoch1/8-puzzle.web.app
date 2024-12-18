import { isSolvable } from "./isSolvable";

export function generatePuzzleID(): string {
    let id: string = ''

    const numbers = Array.from(Array(9).keys());
    for (let x = 0; x < 9; x++) {
        const i = Math.floor(Math.random() * numbers.length);

        id = id.concat(String(numbers[i]))
        numbers.splice(i, 1);
    }


    // check if it is solvable first, if not, recursively call function again
    return isSolvable(id) ? id : generatePuzzleID();
}
