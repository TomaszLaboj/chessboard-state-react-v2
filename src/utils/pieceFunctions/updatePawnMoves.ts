import { pieceObject } from "../interfaces";

export function updatePawnMoves(
  id: number,
  row: number,
  column: number,
  pieceObjectsToUpdate: pieceObject[]
): pieceObject[] {
  const updatedArrayWithPawnMoves: pieceObject[] = pieceObjectsToUpdate;
  const currentPawnSquareArrayIndex: number = pieceObjectsToUpdate.findIndex(
    (item) => item.id === id
  );
  const currentPawn: pieceObject =
    pieceObjectsToUpdate[currentPawnSquareArrayIndex];

  switch (currentPawn.pieceColour) {
    case "white":
      if (currentPawn.row === 7) {
        const squareInFront: pieceObject | undefined =
          updatedArrayWithPawnMoves.find(
            (item) => item.row === row - 1 && item.column === column
          );
        const secondSquareInFront: pieceObject | undefined =
          updatedArrayWithPawnMoves.find(
            (item) => item.row === row - 2 && item.column === column
          );

        const leftDiagonal: pieceObject | undefined =
          updatedArrayWithPawnMoves.find(
            (item) => item.row === row - 1 && item.column === column - 1
          );
        const rightDiagonal: pieceObject | undefined =
          updatedArrayWithPawnMoves.find(
            (item) => item.row === row - 1 && item.column === column + 1
          );

        if (squareInFront === undefined || secondSquareInFront === undefined) {
          console.log("pawn function line 25 - object is empty");
        } else {
          if (squareInFront.piece === "") {
            updatedArrayWithPawnMoves[
              currentPawnSquareArrayIndex
            ].possibleMoves.push(squareInFront.id);
            if (secondSquareInFront.piece === "") {
              updatedArrayWithPawnMoves[
                currentPawnSquareArrayIndex
              ].possibleMoves.push(secondSquareInFront.id);
            }
          }
        }
        if (leftDiagonal === undefined) {
          console.log("pawn function line 36 - object is empty");
        } else {
          if (
            leftDiagonal.piece !== "" &&
            leftDiagonal.pieceColour === "black"
          ) {
            updatedArrayWithPawnMoves[
              currentPawnSquareArrayIndex
            ].possibleMoves.push(leftDiagonal.id);
          }
        }
        if (rightDiagonal === undefined) {
          console.log("pawn function line 44 - object is empty");
        } else {
          if (
            rightDiagonal.piece !== "" &&
            rightDiagonal.pieceColour === "black"
          ) {
            updatedArrayWithPawnMoves[
              currentPawnSquareArrayIndex
            ].possibleMoves.push(rightDiagonal.id);
          }
        }
      }
      break;

    case "black":
      if (currentPawn.row === 2) {
        const squareInFront: pieceObject | undefined =
          updatedArrayWithPawnMoves.find(
            (item) => item.row === row + 1 && item.column === column
          );
        const secondSquareInFront: pieceObject | undefined =
          updatedArrayWithPawnMoves.find(
            (item) => item.row === row + 2 && item.column === column
          );

        const leftDiagonal: pieceObject | undefined =
          updatedArrayWithPawnMoves.find(
            (item) => item.row === row + 1 && item.column === column + 1
          );
        const rightDiagonal: pieceObject | undefined =
          updatedArrayWithPawnMoves.find(
            (item) => item.row === row + 1 && item.column === column - 1
          );

        if (squareInFront === undefined || secondSquareInFront === undefined) {
          console.log("pawn function line 64 - object is empty");
        } else {
          if (squareInFront.piece === "") {
            updatedArrayWithPawnMoves[
              currentPawnSquareArrayIndex
            ].possibleMoves.push(squareInFront.id);
            if (secondSquareInFront.piece === "") {
              updatedArrayWithPawnMoves[
                currentPawnSquareArrayIndex
              ].possibleMoves.push(secondSquareInFront.id);
            }
          }
        }
        if (leftDiagonal === undefined) {
          console.log("pawn function line 75 - object is empty");
        } else {
          if (
            leftDiagonal.piece !== "" &&
            leftDiagonal.pieceColour === "white"
          ) {
            updatedArrayWithPawnMoves[
              currentPawnSquareArrayIndex
            ].possibleMoves.push(leftDiagonal.id);
          }
        }
        if (rightDiagonal === undefined) {
          console.log("pawn function line 83 - object is empty");
        } else {
          if (
            rightDiagonal.piece !== "" &&
            rightDiagonal.pieceColour === "white"
          ) {
            updatedArrayWithPawnMoves[
              currentPawnSquareArrayIndex
            ].possibleMoves.push(rightDiagonal.id);
          }
        }
      }
      break;
  }

  return updatedArrayWithPawnMoves;
}
