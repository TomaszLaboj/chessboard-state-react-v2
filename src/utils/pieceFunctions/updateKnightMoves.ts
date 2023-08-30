import { pieceObject } from "../interfaces";

export function updateKnightMoves(
  id: number,
  row: number,
  column: number,
  pieceObjectsToUpdate: pieceObject[]
): pieceObject[] {
  const updatedArrayWithKnightMoves: pieceObject[] = pieceObjectsToUpdate;
  const currentKnightSquareArrayIndex: number = pieceObjectsToUpdate.findIndex(
    (item) => item.id === id
  );
  const currentKnight: pieceObject =
    pieceObjectsToUpdate[currentKnightSquareArrayIndex];

  const squareAboveLeft: pieceObject | undefined =
    updatedArrayWithKnightMoves.find(
      (item) =>
        item.row === currentKnight.row - 2 &&
        item.column === currentKnight.column - 1
    );
  const squareAboveRight: pieceObject | undefined =
    updatedArrayWithKnightMoves.find(
      (item) =>
        item.row === currentKnight.row - 2 &&
        item.column === currentKnight.column + 1
    );
  const squareBelowLeft: pieceObject | undefined =
    updatedArrayWithKnightMoves.find(
      (item) =>
        item.row === currentKnight.row + 2 &&
        item.column === currentKnight.column - 1
    );
  const squareBelowRight: pieceObject | undefined =
    updatedArrayWithKnightMoves.find(
      (item) =>
        item.row === currentKnight.row + 2 &&
        item.column === currentKnight.column + 1
    );
  const squareUpperLeft: pieceObject | undefined =
    updatedArrayWithKnightMoves.find(
      (item) =>
        item.row === currentKnight.row - 1 &&
        item.column === currentKnight.column - 2
    );
  const squareLowerLeft: pieceObject | undefined =
    updatedArrayWithKnightMoves.find(
      (item) =>
        item.row === currentKnight.row + 1 &&
        item.column === currentKnight.column - 2
    );
  const squareUpperRight: pieceObject | undefined =
    updatedArrayWithKnightMoves.find(
      (item) =>
        item.row === currentKnight.row - 1 &&
        item.column === currentKnight.column + 2
    );
  const squareLowerRight: pieceObject | undefined =
    updatedArrayWithKnightMoves.find(
      (item) =>
        item.row === currentKnight.row + 1 &&
        item.column === currentKnight.column + 2
    );

  const possibleKnightMoves = [
    squareAboveLeft,
    squareAboveRight,
    squareBelowLeft,
    squareBelowRight,
    squareUpperLeft,
    squareUpperRight,
    squareLowerLeft,
    squareLowerRight,
  ];

  for (const square of possibleKnightMoves) {
    if (square === undefined) {
      console.log("knight function - piece object is empty");
    } else {
      if (square.piece !== "") {
        if (square.pieceColour !== currentKnight.pieceColour) {
          updatedArrayWithKnightMoves[
            currentKnightSquareArrayIndex
          ].possibleMoves.push(square.id);
        }
      } else {
        updatedArrayWithKnightMoves[
          currentKnightSquareArrayIndex
        ].possibleMoves.push(square.id);
      }
    }
  }

  return updatedArrayWithKnightMoves;
}
