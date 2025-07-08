
import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";


//------------------------- GameGrid Component -------------------------
const GameGrid = () => {
const { games, error } = useGames();

  //-------------------- JSX --------------------
  return (
    <>
      {error && <Text>Error: {error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
