import { pieceObject } from "../interfaces";

export function updateQueenMoves(
  id: number,
  row: number,
  column: number,
  pieceObjectsToUpdate: pieceObject[]
): pieceObject[] {
  const updatedArrayWithQueenMoves: pieceObject[] = pieceObjectsToUpdate;
  const currentQueenSquareArrayIndex: number = pieceObjectsToUpdate.findIndex(
    (item) => item.id === id
  );
  const currentQueen: pieceObject =
    pieceObjectsToUpdate[currentQueenSquareArrayIndex];

  for (let i = column - 1; i >= 1; i--) {
    const currentSquareToLeft: pieceObject | undefined =
      updatedArrayWithQueenMoves.find(
        (item) => item.row === row && item.column === i
      );

    if (currentSquareToLeft === undefined) {
      console.log("queen function - piece object is empty");
    } else {
      if (currentSquareToLeft.piece !== "") {
        if (currentSquareToLeft.pieceColour !== currentQueen.pieceColour) {
          updatedArrayWithQueenMoves[
            currentQueenSquareArrayIndex
          ].possibleMoves.push(currentSquareToLeft.id);
          i = 1;
        } else {
          i = 1;
        }
      } else {
        updatedArrayWithQueenMoves[
          currentQueenSquareArrayIndex
        ].possibleMoves.push(currentSquareToLeft.id);
      }
    }
  }

  for (let i = column + 1; i <= 8; i++) {
    const currentSquareToRight: pieceObject | undefined =
      updatedArrayWithQueenMoves.find(
        (item) => item.row === row && item.column === i
      );

    if (currentSquareToRight === undefined) {
      console.log("queen function - piece object is empty");
    } else {
      if (currentSquareToRight.piece !== "") {
        if (currentSquareToRight.pieceColour !== currentQueen.pieceColour) {
          updatedArrayWithQueenMoves[
            currentQueenSquareArrayIndex
          ].possibleMoves.push(currentSquareToRight.id);
          i = 8;
        } else {
          i = 8;
        }
      } else {
        updatedArrayWithQueenMoves[
          currentQueenSquareArrayIndex
        ].possibleMoves.push(currentSquareToRight.id);
      }
    }
  }

  for (let i = row - 1; i >= 1; i--) {
    const currentSquareAbove: pieceObject | undefined =
      updatedArrayWithQueenMoves.find(
        (item) => item.row === i && item.column === column
      );

    if (currentSquareAbove === undefined) {
      console.log("queen function - queen function - piece object is empty");
    } else {
      if (currentSquareAbove.piece !== "") {
        if (currentSquareAbove.pieceColour !== currentQueen.pieceColour) {
          updatedArrayWithQueenMoves[
            currentQueenSquareArrayIndex
          ].possibleMoves.push(currentSquareAbove.id);
          i = 1;
        } else {
          i = 1;
        }
      } else {
        updatedArrayWithQueenMoves[
          currentQueenSquareArrayIndex
        ].possibleMoves.push(currentSquareAbove.id);
      }
    }
  }

  for (let i = row + 1; i <= 8; i++) {
    const currentSquareBelow: pieceObject | undefined =
      updatedArrayWithQueenMoves.find(
        (item) => item.row === i && item.column === column
      );

    if (currentSquareBelow === undefined) {
      console.log("queen function - piece object is empty");
    } else {
      if (currentSquareBelow.piece !== "") {
        if (currentSquareBelow.pieceColour !== currentQueen.pieceColour) {
          updatedArrayWithQueenMoves[
            currentQueenSquareArrayIndex
          ].possibleMoves.push(currentSquareBelow.id);
          i = 8;
        } else {
          i = 8;
        }
      } else {
        updatedArrayWithQueenMoves[
          currentQueenSquareArrayIndex
        ].possibleMoves.push(currentSquareBelow.id);
      }
    }
  }

  for (let r = row - 1, c = column - 1; r >= 1 && c >= 1; r--, c--) {
    const currentSquareToUpperLeft: pieceObject | undefined =
      updatedArrayWithQueenMoves.find(
        (item) => item.row === r && item.column === c
      );

    if (currentSquareToUpperLeft === undefined) {
      console.log("queen function - piece object is empty");
    } else {
      if (currentSquareToUpperLeft.piece !== "") {
        if (currentSquareToUpperLeft.pieceColour !== currentQueen.pieceColour) {
          updatedArrayWithQueenMoves[
            currentQueenSquareArrayIndex
          ].possibleMoves.push(currentSquareToUpperLeft.id);
          c = 1;
        } else {
          c = 1;
        }
      } else {
        updatedArrayWithQueenMoves[
          currentQueenSquareArrayIndex
        ].possibleMoves.push(currentSquareToUpperLeft.id);
      }
    }
  }

  for (let r = row - 1, c = column + 1; r >= 1 && c <= 8; r--, c++) {
    const currentSquareToUpperRight: pieceObject | undefined =
      updatedArrayWithQueenMoves.find(
        (item) => item.row === r && item.column === c
      );

    if (currentSquareToUpperRight === undefined) {
      console.log("queen function - piece object is empty");
    } else {
      if (currentSquareToUpperRight.piece !== "") {
        if (
          currentSquareToUpperRight.pieceColour !== currentQueen.pieceColour
        ) {
          updatedArrayWithQueenMoves[
            currentQueenSquareArrayIndex
          ].possibleMoves.push(currentSquareToUpperRight.id);
          c = 8;
        } else {
          c = 8;
        }
      } else {
        updatedArrayWithQueenMoves[
          currentQueenSquareArrayIndex
        ].possibleMoves.push(currentSquareToUpperRight.id);
      }
    }
  }

  for (let r = row + 1, c = column - 1; r <= 8 && c >= 1; r++, c--) {
    const currentSquareToLowerLeft: pieceObject | undefined =
      updatedArrayWithQueenMoves.find(
        (item) => item.row === r && item.column === c
      );

    if (currentSquareToLowerLeft === undefined) {
      console.log("queen function - piece object is empty");
    } else {
      if (currentSquareToLowerLeft.piece !== "") {
        if (currentSquareToLowerLeft.pieceColour !== currentQueen.pieceColour) {
          updatedArrayWithQueenMoves[
            currentQueenSquareArrayIndex
          ].possibleMoves.push(currentSquareToLowerLeft.id);
          c = 1;
        } else {
          c = 1;
        }
      } else {
        updatedArrayWithQueenMoves[
          currentQueenSquareArrayIndex
        ].possibleMoves.push(currentSquareToLowerLeft.id);
      }
    }
  }

  for (let r = row + 1, c = column + 1; r <= 8 && c <= 8; r++, c++) {
    const currentSquareToLowerRight: pieceObject | undefined =
      updatedArrayWithQueenMoves.find(
        (item) => item.row === r && item.column === c
      );

    if (currentSquareToLowerRight === undefined) {
      console.log("queen fucntion - piece object is empty");
    } else {
      if (currentSquareToLowerRight.piece !== "") {
        if (
          currentSquareToLowerRight.pieceColour !== currentQueen.pieceColour
        ) {
          updatedArrayWithQueenMoves[
            currentQueenSquareArrayIndex
          ].possibleMoves.push(currentSquareToLowerRight.id);
          c = 8;
        } else {
          c = 8;
        }
      } else {
        updatedArrayWithQueenMoves[
          currentQueenSquareArrayIndex
        ].possibleMoves.push(currentSquareToLowerRight.id);
      }
    }
  }

  return updatedArrayWithQueenMoves;
}
