import { Heading, List, ListItem, Box, Text } from "@chakra-ui/react";
import { playerName } from "const";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import { gameStatsState } from "state";

const GameProgress: FC = () => {
  const stats = useRecoilValue(gameStatsState);
  const p1 = playerName[1];
  const p2 = playerName[2];

  return (
    <Box
      maxW="sm"
      w="70%"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
    >
      <Heading size="md" mb={4}>
        Game Stats
      </Heading>
      <Box
        color="gray.500"
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="xs"
        textTransform="uppercase"
        ml="2"
        noOfLines={1}
      >
        <Text as="b" color="black">
          {p1}
        </Text>{" "}
        has{" "}
        <Text as="b" color="black">
          {stats[1]}
        </Text>{" "}
        points
      </Box>
      <Box
        color="gray.500"
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="xs"
        textTransform="uppercase"
        ml="2"
        noOfLines={1}
      >
        <Text as="b" color="black">
          {p2}
        </Text>{" "}
        has{" "}
        <Text as="b" color="black">
          {stats[2]}
        </Text>{" "}
        points
      </Box>
      <Box
        color="gray.500"
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="xs"
        textTransform="uppercase"
        ml="2"
        noOfLines={1}
      >
        A total of{" "}
        <Text as="b" color="black">
          {stats['ties']}
        </Text>{" "}
        draws happened.
      </Box>
      <Box
        color="gray.500"
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="xs"
        textTransform="uppercase"
        ml="2"
        noOfLines={1}
      >
        <Text as="b" color="black">
          {stats['totals']}
        </Text>{" "}
        games were played.
      </Box>
    </Box>
  );
};

export default GameProgress;
