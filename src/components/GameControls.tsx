import { Button, ButtonGroup } from "@chakra-ui/react";
import { FC } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { boardState, gameOverState, playerState, gameStatsState, gameResultState } from "state";

const GameControls: FC = () => {
  const board = useRecoilValue(boardState);
  const resetBoard = useResetRecoilState(boardState);
  const resetPlayer = useResetRecoilState(playerState);
  const resetGameOver = useResetRecoilState(gameOverState);
  const resetStats = useResetRecoilState(gameStatsState);
  const resetResult = useResetRecoilState(gameResultState);

  const handleRestart = () => {
    resetBoard();
    resetPlayer();
    resetGameOver();
    resetResult();
  };

  const handleReset = () => {
    resetBoard();
    resetPlayer();
    resetGameOver();
    resetStats();
    resetResult();
  };

  return (
    <ButtonGroup>
      <Button
        colorScheme='green'
        variant='solid'
        onClick={handleRestart}
        isDisabled={!board.some((col) => col.length)}
      >
        Restart
      </Button>
      <Button
        colorScheme='red'
        variant='outline'
        onClick={handleReset}
      >
        Reset
      </Button>
    </ButtonGroup>
  );
};

export default GameControls;
