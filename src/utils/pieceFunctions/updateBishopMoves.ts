import { pieceObject } from "../interfaces";

export function updateBishopMoves(
  id: number,
  row: number,
  column: number,
  pieceObjectsToUpdate: pieceObject[]
): pieceObject[] {
  const updatedArrayWithBishopMoves: pieceObject[] = pieceObjectsToUpdate;
  const currentBishopSquareArrayIndex: number = pieceObjectsToUpdate.findIndex(
    (item) => item.id === id
  );
  const currentBishop: pieceObject =
    pieceObjectsToUpdate[currentBishopSquareArrayIndex];

  for (let r = row - 1, c = column - 1; r >= 1 && c >= 1; r--, c--) {
    const currentSquareToUpperLeft: pieceObject | undefined =
      updatedArrayWithBishopMoves.find(
        (item) => item.row === r && item.column === c
      );

    if (currentSquareToUpperLeft === undefined) {
      console.log("bishop function - piece object is empty");
    } else {
      if (currentSquareToUpperLeft.piece !== "") {
        if (
          currentSquareToUpperLeft.pieceColour !== currentBishop.pieceColour
        ) {
          updatedArrayWithBishopMoves[
            currentBishopSquareArrayIndex
          ].possibleMoves.push(currentSquareToUpperLeft.id);
          c = 1;
        } else {
          c = 1;
        }
      } else {
        updatedArrayWithBishopMoves[
          currentBishopSquareArrayIndex
        ].possibleMoves.push(currentSquareToUpperLeft.id);
      }
    }
  }

  for (let r = row - 1, c = column + 1; r >= 1 && c <= 8; r--, c++) {
    const currentSquareToUpperRight: pieceObject | undefined =
      updatedArrayWithBishopMoves.find(
        (item) => item.row === r && item.column === c
      );

    if (currentSquareToUpperRight === undefined) {
      console.log("bishop function - piece object is empty");
    } else {
      if (currentSquareToUpperRight.piece !== "") {
        if (
          currentSquareToUpperRight.pieceColour !== currentBishop.pieceColour
        ) {
          updatedArrayWithBishopMoves[
            currentBishopSquareArrayIndex
          ].possibleMoves.push(currentSquareToUpperRight.id);
          c = 8;
        } else {
          c = 8;
        }
      } else {
        updatedArrayWithBishopMoves[
          currentBishopSquareArrayIndex
        ].possibleMoves.push(currentSquareToUpperRight.id);
      }
    }
  }

  for (let r = row + 1, c = column - 1; r <= 8 && c >= 1; r++, c--) {
    const currentSquareToLowerLeft: pieceObject | undefined =
      updatedArrayWithBishopMoves.find(
        (item) => item.row === r && item.column === c
      );

    if (currentSquareToLowerLeft === undefined) {
      console.log("bishop function - piece object is empty");
    } else {
      if (currentSquareToLowerLeft.piece !== "") {
        if (
          currentSquareToLowerLeft.pieceColour !== currentBishop.pieceColour
        ) {
          updatedArrayWithBishopMoves[
            currentBishopSquareArrayIndex
          ].possibleMoves.push(currentSquareToLowerLeft.id);
          c = 1;
        } else {
          c = 1;
        }
      } else {
        updatedArrayWithBishopMoves[
          currentBishopSquareArrayIndex
        ].possibleMoves.push(currentSquareToLowerLeft.id);
      }
    }
  }

  for (let r = row + 1, c = column + 1; r <= 8 && c <= 8; r++, c++) {
    const currentSquareToLowerRight: pieceObject | undefined =
      updatedArrayWithBishopMoves.find(
        (item) => item.row === r && item.column === c
      );

    if (currentSquareToLowerRight === undefined) {
      console.log("bishop function - piece object is empty");
    } else {
      if (currentSquareToLowerRight.piece !== "") {
        if (
          currentSquareToLowerRight.pieceColour !== currentBishop.pieceColour
        ) {
          updatedArrayWithBishopMoves[
            currentBishopSquareArrayIndex
          ].possibleMoves.push(currentSquareToLowerRight.id);
          c = 8;
        } else {
          c = 8;
        }
      } else {
        updatedArrayWithBishopMoves[
          currentBishopSquareArrayIndex
        ].possibleMoves.push(currentSquareToLowerRight.id);
      }
    }
  }

  return updatedArrayWithBishopMoves;
}
