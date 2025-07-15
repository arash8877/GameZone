import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GenreProps } from "../hooks/useGenres";
import { PlatformProps } from "../hooks/usePlatforms";
import { useEffect } from "react";

interface GameGridProps {
  selectedGenre: GenreProps | null;
  selectedPlatform: PlatformProps | null;
  sortOrder: string;
  searchText: string;
}

//------------------------- GameGrid Component -------------------------
const GameGrid = ({ selectedGenre, selectedPlatform, sortOrder, searchText }: GameGridProps) => {
  const { games, error, isLoading } = useGames(selectedGenre, selectedPlatform, sortOrder, searchText);
  const Skeletons = [1, 2, 3, 4, 5, 6];

 

  //-------------------- JSX --------------------
  return (
    <>
      {error && <Text>Error: {error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={3} padding="10px">
        {isLoading && Skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
