export type Player = 1 | 2;
export type Board = Player[][];
export type GameStats = {
    1: number;
    2: number;
    ties: number;
    totals: number;
};
export type GameResult = "win" | "tie" | null;
