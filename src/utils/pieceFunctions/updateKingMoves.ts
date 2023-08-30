import { pieceObject } from "../interfaces";

export function updateKingMoves(
  id: number,
  row: number,
  column: number,
  pieceObjectsToUpdate: pieceObject[]
): pieceObject[] {
  const updatedArrayWithKingMoves: pieceObject[] = pieceObjectsToUpdate;
  const currentKingSquareArrayIndex: number = pieceObjectsToUpdate.findIndex(
    (item) => item.id === id
  );
  const currentKing: pieceObject =
    pieceObjectsToUpdate[currentKingSquareArrayIndex];

  const westSquare: pieceObject | undefined = updatedArrayWithKingMoves.find(
    (item) => item.row === row && item.column === column - 1
  );
  const northWestSquare: pieceObject | undefined =
    updatedArrayWithKingMoves.find(
      (item) => item.row === row - 1 && item.column === column - 1
    );
  const northSquare: pieceObject | undefined = updatedArrayWithKingMoves.find(
    (item) => item.row === row - 1 && item.column === column
  );
  const northEastSquare: pieceObject | undefined =
    updatedArrayWithKingMoves.find(
      (item) => item.row === row - 1 && item.column === column + 1
    );
  const eastSquare: pieceObject | undefined = updatedArrayWithKingMoves.find(
    (item) => item.row === row && item.column === column + 1
  );
  const southEastSquare: pieceObject | undefined =
    updatedArrayWithKingMoves.find(
      (item) => item.row === row + 1 && item.column === column + 1
    );
  const southSquare: pieceObject | undefined = updatedArrayWithKingMoves.find(
    (item) => item.row === row + 1 && item.column === column
  );
  const southWestSquare: pieceObject | undefined =
    updatedArrayWithKingMoves.find(
      (item) => item.row === row + 1 && item.column === column - 1
    );

  const surroundingSquares = [
    westSquare,
    northWestSquare,
    northSquare,
    northEastSquare,
    eastSquare,
    southEastSquare,
    southSquare,
    southWestSquare,
  ];

  for (const square of surroundingSquares) {
    if (square === undefined) {
      console.log("king function - piece object is empty");
    } else {
      if (square.piece !== "") {
        if (square.pieceColour !== currentKing.pieceColour) {
          updatedArrayWithKingMoves[
            currentKingSquareArrayIndex
          ].possibleMoves.push(square.id);
        }
      } else {
        updatedArrayWithKingMoves[
          currentKingSquareArrayIndex
        ].possibleMoves.push(square.id);
      }
    }
  }

  return updatedArrayWithKingMoves;
}
