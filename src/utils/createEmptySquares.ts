import { oneSquare } from "./interfaces";

export function createEmptySquares(): oneSquare[] {
  const rows: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  const columns: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  const emptySquares: oneSquare[] = [];
  let lastId = 0;
  for (const row of rows) {
    for (const column of columns) {
      emptySquares.push({
        id: column + lastId,
        row: row,
        column: column,
        piece: "",
        pieceCode: "",
        colour: "",
      });
    }
    lastId += 8;
  }
  return emptySquares;
}
