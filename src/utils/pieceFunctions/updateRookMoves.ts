import { pieceObject } from "../interfaces";

export function updateRookMoves(
  id: number,
  row: number,
  column: number,
  pieceObjectsToUpdate: pieceObject[]
): pieceObject[] {
  const updatedArrayWithRookMoves: pieceObject[] = pieceObjectsToUpdate;
  const currentRookSquareArrayIndex: number = pieceObjectsToUpdate.findIndex(
    (item) => item.id === id
  );
  const currentRook: pieceObject =
    pieceObjectsToUpdate[currentRookSquareArrayIndex];

  for (let i = column - 1; i >= 1; i--) {
    const currentSquareToLeft: pieceObject | undefined =
      updatedArrayWithRookMoves.find(
        (item) => item.row === row && item.column === i
      );

    if (currentSquareToLeft === undefined) {
      console.log("rook function - piece object is empty");
    } else {
      if (currentSquareToLeft.piece !== "") {
        if (currentSquareToLeft.pieceColour !== currentRook.pieceColour) {
          updatedArrayWithRookMoves[
            currentRookSquareArrayIndex
          ].possibleMoves.push(currentSquareToLeft.id);
          i = 1;
        } else {
          i = 1;
        }
      } else {
        updatedArrayWithRookMoves[
          currentRookSquareArrayIndex
        ].possibleMoves.push(currentSquareToLeft.id);
      }
    }
  }

  for (let i = column + 1; i <= 8; i++) {
    const currentSquareToRight: pieceObject | undefined =
      updatedArrayWithRookMoves.find(
        (item) => item.row === row && item.column === i
      );

    if (currentSquareToRight === undefined) {
      console.log("rook function - piece object is empty");
    } else {
      if (currentSquareToRight.piece !== "") {
        if (currentSquareToRight.pieceColour !== currentRook.pieceColour) {
          updatedArrayWithRookMoves[
            currentRookSquareArrayIndex
          ].possibleMoves.push(currentSquareToRight.id);
          i = 8;
        } else {
          i = 8;
        }
      } else {
        updatedArrayWithRookMoves[
          currentRookSquareArrayIndex
        ].possibleMoves.push(currentSquareToRight.id);
      }
    }
  }

  for (let i = row - 1; i >= 1; i--) {
    const currentSquareAbove: pieceObject | undefined =
      updatedArrayWithRookMoves.find(
        (item) => item.row === i && item.column === column
      );

    if (currentSquareAbove === undefined) {
      console.log("rook function - piece object is empty");
    } else {
      if (currentSquareAbove.piece !== "") {
        if (currentSquareAbove.pieceColour !== currentRook.pieceColour) {
          updatedArrayWithRookMoves[
            currentRookSquareArrayIndex
          ].possibleMoves.push(currentSquareAbove.id);
          i = 1;
        } else {
          i = 1;
        }
      } else {
        updatedArrayWithRookMoves[
          currentRookSquareArrayIndex
        ].possibleMoves.push(currentSquareAbove.id);
      }
    }
  }

  for (let i = row + 1; i <= 8; i++) {
    const currentSquareBelow: pieceObject | undefined =
      updatedArrayWithRookMoves.find(
        (item) => item.row === i && item.column === column
      );

    if (currentSquareBelow === undefined) {
      console.log("rook function - piece object is empty");
    } else {
      if (currentSquareBelow.piece !== "") {
        if (currentSquareBelow.pieceColour !== currentRook.pieceColour) {
          updatedArrayWithRookMoves[
            currentRookSquareArrayIndex
          ].possibleMoves.push(currentSquareBelow.id);
          i = 8;
        } else {
          i = 8;
        }
      } else {
        updatedArrayWithRookMoves[
          currentRookSquareArrayIndex
        ].possibleMoves.push(currentSquareBelow.id);
      }
    }
  }

  return updatedArrayWithRookMoves;
}
