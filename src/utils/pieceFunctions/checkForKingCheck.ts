import { pieceObject, isKingCheckedObject } from "../interfaces";

export function checkForKingCheck(
  pieceObjectsToCheck: pieceObject[]
): isKingCheckedObject[] {
  const isWhiteKingChecked: isKingCheckedObject = {
    attackedBy: [],
  };

  const isBlackKingChecked: isKingCheckedObject = {
    attackedBy: [],
  };

  const whiteKing: pieceObject | undefined = pieceObjectsToCheck.find(
    (item) => item.piece === "♔"
  );
  const blackKing: pieceObject | undefined = pieceObjectsToCheck.find(
    (item) => item.piece === "♚"
  );

  if (whiteKing === undefined) {
    console.log("White king not attacked");
  } else {
    if (whiteKing.attackedBy.length !== 0) {
      isWhiteKingChecked.attackedBy = [...whiteKing.attackedBy];
    }
  }

  if (blackKing === undefined) {
    console.log("Black king not attacked");
  } else {
    if (blackKing.attackedBy.length !== 0) {
      isBlackKingChecked.attackedBy = [...blackKing.attackedBy];
    }
  }

  return [isWhiteKingChecked, isBlackKingChecked];
}
