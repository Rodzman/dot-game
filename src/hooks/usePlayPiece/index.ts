import { boardRows } from "const";
import { useRecoilState } from "recoil";
import { boardState, gameOverState, gameResultState, gameStatsState, playerState } from "state";
import { isTie, isWin } from "./utils";

const usePlayPiece = () => {
  const [board, setBoard] = useRecoilState(boardState);
  const [player, setPlayerTurn] = useRecoilState(playerState);
  const [gameOver, setGameOver] = useRecoilState(gameOverState);
  const [, setGameStats] = useRecoilState(gameStatsState);
  const [, setGameResult] = useRecoilState(gameResultState);

  return (col: number) => {
    // Prevent adding a piece when the game is over
    if (gameOver) {
      return;
    }

    // Prevent adding a piece when the column is full
    if (board[col].length === boardRows) {
      return;
    }

    // Play piece (non mutating)
    const newBoard = board.map((column, i) =>
      i === col ? [...column, player] : column
    );

    const row = newBoard[col].length - 1;

    if (
      isWin(newBoard, row, col) // Did win vertically, horizontally or diagonally
    ) {
      setGameStats((prev) => ({ ...prev, [player]: prev[player] + 1, totals: prev.totals + 1 }));
      setGameResult("win");
      setGameOver(true);
    } else if (isTie(newBoard)) {
      setGameStats((prev) => ({ ...prev, ties: prev.ties + 1, totals: prev.totals + 1 }));
      setGameResult("tie");
      setGameOver(true);
    } else {
      setPlayerTurn(player === 1 ? 2 : 1);
    }

    setBoard(newBoard);
  };
};

export default usePlayPiece;
