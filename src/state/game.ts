import { boardCols } from "const";
import { atom } from "recoil";
import { Board, GameStats, GameResult, Player } from "types";
import { localStorageEffect } from "./utils";

export const boardState = atom<Board>({
  key: "boardState",
  default: Array(boardCols).fill([]),
  effects: [
    localStorageEffect('boardState'),
  ]
});

export const playerState = atom<Player>({
  key: "playerState",
  default: 1,
  effects: [
    localStorageEffect('playerState'),
  ]
});

export const gameOverState = atom<boolean>({
  key: "gameOverState",
  default: false,
  effects: [
    localStorageEffect('gameOverState'),
  ]
});

export const gameResultState = atom<GameResult>({
  key: "gameResult",
  default: null,
  effects: [
    localStorageEffect('gameResult'),
  ]
});

export const gameStatsState = atom<GameStats>({
  key: "gameStats",
  default: {
    1: 0,
    2: 0,
    ties: 0,
    totals: 0
  },
  effects: [
    localStorageEffect('gameStats'),
  ]
});
