import { oneSquare } from "./interfaces";
import { piecesObject } from "./pieces";

export function createBoardStateFromString(
  boardStringArray: string[],
  emptySquares: oneSquare[]
): oneSquare[] {
  const updatedSquares: oneSquare[] = [...emptySquares];
  emptySquares.forEach((element, index) => {
    element.piece =
      piecesObject[boardStringArray[index] as keyof typeof piecesObject];
    element.pieceCode = boardStringArray[index];
  });

  return updatedSquares;
}
