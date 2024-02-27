import { WINNER_COMBOS } from "../constants";

export const checkWinnerFrom = (boardToCheck) => {
  /**Se revisan todas la combinaciones ganadoras para
   * ver si X u O ganó
   */
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] /*Si en la posicion 0, es X y O*/ &&
      boardToCheck[a] == boardToCheck[b] &&
      boardToCheck[a] == boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  //Si no hay ganador
  return null;
};

export const checkEndGame = (newBoard) => {
  /**se revisa si hay un empate
   * si no hay mas espacios vacios
   * en el tablero
   */
  return newBoard.every((square) => square != null);
};
