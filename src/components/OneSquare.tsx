import { oneSquare } from "../utils/interfaces";

interface oneSquareProps {
  square: oneSquare;
}

export function OneSquare(props: oneSquareProps) {
  return (
    <div
      className={
        (props.square.row + props.square.column) % 2 === 0 ? "white" : "black"
      }
    >
      <div>{props.square.piece}</div>
    </div>
  );
}
