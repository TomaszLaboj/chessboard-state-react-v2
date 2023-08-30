export function parseStringToArray(boardStateString: string): string[] {
  const boardStringAsArray: string[] = boardStateString
    .replace(/[^rnbkqp.RNBKQP]/g, "")
    .split("")
    .filter((char) => char !== "\n");
  return boardStringAsArray;
}

export function checkForCorrectCharacters(boardStateString: string): string[] {
  const incorrectChars: string[] = [];
  const correctChars: string[] = [
    "r",
    "n",
    "b",
    "k",
    "q",
    "p",
    ".",
    "R",
    "N",
    "B",
    "K",
    "Q",
    "P",
    " ",
    "\n",
  ];
  for (const char of boardStateString) {
    if (!correctChars.includes(char)) {
      incorrectChars.push(char);
    }
  }
  return incorrectChars;
}
