import { pieceObject } from "../interfaces";

export function updateAttackedBy(
  id: number,
  pieceObjects: pieceObject[]
): pieceObject[] {
  const updatedPieceObjects: pieceObject[] = [...pieceObjects];
  const currentPieceIndex: number = updatedPieceObjects.findIndex(
    (item) => item.id === id
  );

  for (const object of updatedPieceObjects) {
    if (object.possibleMoves.includes(id)) {
      updatedPieceObjects[currentPieceIndex].attackedBy.push(
        getPieceName(object.piece)
      );
    } else {
      console.log("nothing found");
    }
  }

  return updatedPieceObjects;
}

function getPieceName(pieceSymbol: string): string {
  let pieceName = "";

  switch (pieceSymbol) {
    case "♜":
    case "♖":
      pieceName = "Rook";
      break;
    case "♞":
    case "♘":
      pieceName = "Knight";
      break;
    case "♝":
    case "♗":
      pieceName = "Bishop";
      break;
    case "♛":
    case "♕":
      pieceName = "Queen";
      break;
    case "♟︎":
    case "♙":
      pieceName = "Pawn";
      break;
    case "♚":
    case "♔":
      pieceName = "King";
      break;
    default:
      break;
  }
  return pieceName;
}
