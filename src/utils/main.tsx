import { startingPositionString, positions } from "./boardState";
import { createBoardStateFromString } from "./createBoardStateFromString";
import { parseStringToArray } from "./parseStringToArray";
import { createEmptySquares } from "./createEmptySquares";
import { oneSquare, pieceObject, isKingCheckedObject } from "./interfaces";
import { OneSquare } from "../components/OneSquare";
import { useState } from "react";
import { createPieceObjects } from "./createPieceObjects";
import { updatePieceObjects } from "./updatePieceObjects";
import "../styles.css";
import { checkForKingCheck } from "./pieceFunctions/checkForKingCheck";

export function ShowBoardState(): JSX.Element {
  const startingPositionStringArray: string[] = parseStringToArray(
    startingPositionString
  );
  const emptySquaresArray: oneSquare[] = createEmptySquares();
  const [boardInputString, setBoardInputString] = useState<string>("");

  const boardSquaresElements: JSX.Element[] = [];
  const [currentBoardState, setCurrentBoardState] = useState<oneSquare[]>([
    ...emptySquaresArray,
  ]);

  let pieceObjects: pieceObject[] = createPieceObjects(currentBoardState);

  pieceObjects = updatePieceObjects(pieceObjects);
  const kingChecks: isKingCheckedObject[] = checkForKingCheck(pieceObjects);
  console.log("white king is checked by: ", kingChecks[0].attackedBy);
  console.log("black king is checked by: ", kingChecks[1].attackedBy);
  const handleLoadStartingPosition = () => {
    const updateBoard: oneSquare[] = createBoardStateFromString(
      startingPositionStringArray,
      emptySquaresArray
    );
    setBoardInputString(startingPositionString);
    setCurrentBoardState([...updateBoard]);
  };

  const handleLoadPosition1 = () => {
    const charactersArray: string[] = parseStringToArray(positions[0]);
    const updateBoard: oneSquare[] = createBoardStateFromString(
      charactersArray,
      emptySquaresArray
    );
    setBoardInputString(positions[0]);
    setCurrentBoardState([...updateBoard]);
  };

  const handleLoadPosition2 = () => {
    const charactersArray: string[] = parseStringToArray(positions[1]);
    const updateBoard: oneSquare[] = createBoardStateFromString(
      charactersArray,
      emptySquaresArray
    );
    setBoardInputString(positions[1]);
    setCurrentBoardState([...updateBoard]);
  };

  const handleLoadPosition3 = () => {
    const charactersArray: string[] = parseStringToArray(positions[2]);
    const updateBoard: oneSquare[] = createBoardStateFromString(
      charactersArray,
      emptySquaresArray
    );
    setBoardInputString(positions[2]);
    setCurrentBoardState([...updateBoard]);
  };

  const handleEmptyBoard = () => {
    const emptyBoard = createEmptySquares();
    setCurrentBoardState(emptyBoard);
  };

  const handleLoadBoard = () => {
    const inputStringArr: string[] = parseStringToArray(boardInputString);
    const updateBoard: oneSquare[] = createBoardStateFromString(
      inputStringArr,
      emptySquaresArray
    );
    setCurrentBoardState([...updateBoard]);
  };

  const handleClearInput = () => {
    setBoardInputString("");
  };

  for (const element of currentBoardState) {
    boardSquaresElements.push(<OneSquare key={element.id} square={element} />);
  }
  return (
    <>
      <header className="header" title="Chess position checker">
        Chess position checker
      </header>

      <div className="buttonsAndBoard">
        <div className="buttonsAndInput">
          <nav>
            <button
              className="buttonStartingPos"
              onClick={handleLoadStartingPosition}
            >
              Load starting position
            </button>
            <br />
            <button className="buttonStartingPos" onClick={handleLoadPosition1}>
              Load position 1
            </button>
            <br />
            <button className="buttonStartingPos" onClick={handleLoadPosition2}>
              Load position 2
            </button>
            <br />
            <button className="buttonStartingPos" onClick={handleLoadPosition3}>
              Load position 3
            </button>
            <br />
            <textarea
              value={boardInputString}
              className="inputBox"
              onChange={(event) => {
                setBoardInputString(event.target.value);
              }}
              rows={8}
              cols={8}
            ></textarea>
            <br />
            <button className="button" onClick={handleLoadBoard}>
              Load board
            </button>
            <br />
            <button className="button" onClick={handleClearInput}>
              Clear input
            </button>
            <br />
            <button className="button" onClick={handleEmptyBoard}>
              Empty board
            </button>
          </nav>
        </div>

        <div className="kingChecksAndBoard">
          <div className="kingChecks">
            <div>
              {kingChecks[0].attackedBy.length > 0 && (
                <p>White king is checked by </p>
              )}
              {kingChecks[0].attackedBy}
            </div>
            <div>
              {kingChecks[1].attackedBy.length > 0 && (
                <p>Black king is checked by </p>
              )}
              {kingChecks[1].attackedBy}
            </div>
          </div>
          <div className="board">{boardSquaresElements}</div>
        </div>
      </div>

      <aside>
        <p className="description">
          Instructions:
          <br />
          Try pasting a string which denotes the postion of pieces on the board.{" "}
          <br />
          The characters: r = black rook, n=black knight, b=black bishop,
          k=black king, q=black queen, p=black pawn.
          <br />
          Switch to capitals for white pieces. Enter "." for an empty square.{" "}
          <br />
          The app will accept first 64 correct characters and will ignore
          incorrect ones (including spaces) and more than 64.
          <br />
          For starting positon enter:
          <br />
          `r n b q k b n r p p p p p p p p . . . . . . . . . . . . . . . . . . .
          . . . . . . . . . . . . . P P P P P P P P R N B Q K B N R`
          <br />
          And press 'Load board'
          <br />
          Upcoming:
          <br />
          1. Checking if the king is being 'checked'. <br />
          2. Show whose turn it is in given position.
          <br />
          3. Accept board position in the standard chess FEN notation.
          <br />
        </p>
      </aside>
    </>
  );
}
