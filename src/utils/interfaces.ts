export interface oneSquare {
  id: number;
  row: number;
  column: number;
  piece: string;
  pieceCode: string;
  colour: string;
}

export interface pieceObject {
  id: number;
  row: number;
  column: number;
  piece: string;
  pieceColour: string;
  possibleMoves: number[];
  attackedBy: string[];
}

export interface pieces {
  r: string;
  n: string;
  b: string;
  k: string;
  q: string;
  p: string;

  R: string;
  N: string;
  B: string;
  K: string;
  Q: string;
  P: string;
}

export interface isKingCheckedObject {
  attackedBy: string[];
}
