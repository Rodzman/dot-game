import { expect, test, describe, beforeEach } from "@jest/globals";
import { act, renderHook } from "@testing-library/react";
import { usePlayPiece } from "hooks";
import { RecoilRoot, useRecoilValue, useResetRecoilState } from "recoil";
import { boardState, gameOverState, playerState } from "state";
import { Board, Player } from "types";

describe("usePlayPiece", () => {
  const render = () => {
    const { result } = renderHook(
      () => ({
        play: usePlayPiece(),
        board: useRecoilValue(boardState),
        player: useRecoilValue(playerState),
        gameOver: useRecoilValue(gameOverState),
        resetBoard: useResetRecoilState(boardState),
        resetPlayer: useResetRecoilState(playerState),
        resetGameOver: useResetRecoilState(gameOverState),
      }),
      {
        wrapper: RecoilRoot,
      }
    );

    return {
      result,
      play: (col: number) => {
        act(() => {
          result.current.play(col);
        });
      },
      assertGame: (player: Player, gameOver: boolean, board: Board) => {
        expect(result.current.board).toEqual(board);
        expect(result.current.player).toEqual(player);
        expect(result.current.gameOver).toEqual(gameOver);
      },
      reset: () => {
        act(() => {
          result.current.resetBoard();
          result.current.resetPlayer();
          result.current.resetGameOver();
        });
      },
    };
  };

  beforeEach(() => {
    // reset state before each test
    const { reset } = render();
    reset();
  });

  test("should win with 4 in a row vertically", () => {
    const { play, assertGame, reset } = render();

    [0, 1, 0, 1, 0, 1, 0].forEach(play);

    // Player 1 won the game!
    assertGame(1, true, [[1, 1, 1, 1], [2, 2, 2], [], [], [], [], []]);

    play(1);
    // Can't play any more pieces after the game is over
    assertGame(1, true, [[1, 1, 1, 1], [2, 2, 2], [], [], [], [], []]);
  });

  test("should win with 4 in a row horizontally", () => {
    const { play, assertGame, reset } = render();

    [0, 6, 1, 6, 3, 6, 4, 5, 2].forEach(play);

    // Player 1 won the game!
    assertGame(1, true, [[1], [1], [1], [1], [1], [2], [2, 2, 2]]);
  });

  test("should not play a piece when the column is full", () => {
    const { play, assertGame, reset } = render();

    [0, 0, 0, 0, 0, 0].forEach(play);

    assertGame(1, false, [[1, 2, 1, 2, 1, 2], [], [], [], [], [], []]);

    play(0);
    // No change because column is full
    assertGame(1, false, [[1, 2, 1, 2, 1, 2], [], [], [], [], [], []]);
  });
});
