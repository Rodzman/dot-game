import { Heading } from "@chakra-ui/react";
import { playerName } from "const";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import { gameOverState, gameResultState, playerState } from "state";

const GameProgress: FC = () => {
  const player = useRecoilValue(playerState);
  const gameOver = useRecoilValue(gameOverState);
  const gameResult = useRecoilValue(gameResultState);
  const name = playerName[player];

  const getGameResult = () => {
    if (gameOver) {
      if (gameResult === "tie") {
        return "It's a draw!";
      }

      return `${name} wins!`;
    }

    return `${name}'s turn`;
  }

  return (
    <Heading as="h3" size="lg">
      {getGameResult()}
    </Heading>
  );
};

export default GameProgress;
