import { pieceObject } from "./interfaces";
import { updateRookMoves } from "./pieceFunctions/updateRookMoves";
import { updateBishopMoves } from "./pieceFunctions/updateBishopMoves";
import { updateQueenMoves } from "./pieceFunctions/updateQueenMoves";
import { updateKnightMoves } from "./pieceFunctions/updateKnightMoves";
import { updateKingMoves } from "./pieceFunctions/updateKingMoves";
import { updatePawnMoves } from "./pieceFunctions/updatePawnMoves";
import { updateAttackedBy } from "./pieceFunctions/updateAttackedBy";

export function updatePieceObjects(pieceObjects: pieceObject[]): pieceObject[] {
  let updatedPieceObjects: pieceObject[] = [...pieceObjects];

  for (const square of updatedPieceObjects) {
    switch (square.piece) {
      case "♜":
      case "♖":
        updatedPieceObjects = updateRookMoves(
          square.id,
          square.row,
          square.column,
          updatedPieceObjects
        );
        break;
      case "♝":
      case "♗":
        updatedPieceObjects = updateBishopMoves(
          square.id,
          square.row,
          square.column,
          updatedPieceObjects
        );
        break;
      case "♛":
      case "♕":
        updatedPieceObjects = updateQueenMoves(
          square.id,
          square.row,
          square.column,
          updatedPieceObjects
        );
        break;
      case "♞":
      case "♘":
        updatedPieceObjects = updateKnightMoves(
          square.id,
          square.row,
          square.column,
          updatedPieceObjects
        );
        break;
      case "♚":
      case "♔":
        updatedPieceObjects = updateKingMoves(
          square.id,
          square.row,
          square.column,
          updatedPieceObjects
        );
        break;
      case "♟︎":
      case "♙":
        updatedPieceObjects = updatePawnMoves(
          square.id,
          square.row,
          square.column,
          updatedPieceObjects
        );
        break;
      default:
        break;
    }
  }

  for (const square of updatedPieceObjects) {
    updatedPieceObjects = updateAttackedBy(square.id, updatedPieceObjects);
  }

  return updatedPieceObjects;
}
