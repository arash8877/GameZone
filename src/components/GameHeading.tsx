import { Heading } from "@chakra-ui/react";
import { PlatformProps } from "../hooks/usePlatforms";
import { GenreProps } from "../hooks/useGenres";

interface GameHeadingProps {
  selectedGenre: GenreProps | null;
  selectedPlatform: PlatformProps | null;
}

//------------------ GameHeading Component -----------------
const GameHeading = ({ selectedGenre, selectedPlatform }: GameHeadingProps) => {
  const heading = `${selectedPlatform?.name || ""} ${selectedGenre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize='5xl'>
      {heading}
    </Heading>
  );
};

export default GameHeading;
