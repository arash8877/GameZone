import { Heading } from "@chakra-ui/react";

interface GameHeadingProps {
  selectedGenre: string | null;
  selectedPlatform: string | null;
}

//------------------ GameHeading Component -----------------
const GameHeading = ({ selectedGenre, selectedPlatform }: GameHeadingProps) => {
    
  return <Heading as="h1"></Heading>;
};

export default GameHeading;
