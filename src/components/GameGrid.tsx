
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";


//------------------------- GameGrid Component -------------------------
const GameGrid = () => {
const { games, error } = useGames();

  //-------------------- JSX --------------------
  return (
    <>
      {error && <Text>Error: {error}</Text>}
      <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5}} spacing={10} padding={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
