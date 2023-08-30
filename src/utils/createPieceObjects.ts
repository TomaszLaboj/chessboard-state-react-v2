import { pieceObject, oneSquare } from "./interfaces";

export function createPieceObjects(
  currentStateArray: oneSquare[]
): pieceObject[] {
  const pieceObjects: pieceObject[] = [];

  for (const square of currentStateArray) {
    const currentPiece = square.pieceCode === "." ? "" : square.piece;

    const currentPieceColour =
      square.pieceCode === "."
        ? ""
        : square.pieceCode.toUpperCase() === square.pieceCode
        ? "white"
        : "black";

    pieceObjects.push({
      id: square.id,
      row: square.row,
      column: square.column,
      piece: currentPiece,
      pieceColour: currentPieceColour,
      possibleMoves: [],
      attackedBy: [],
    });
  }

  return pieceObjects;
}
