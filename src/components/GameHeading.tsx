import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../store";

//------------------ GameHeading Component -----------------
const GameHeading = () => {
  // const {selectedGenre, selectedPlatform} = useGameQueryStore(); if I use this, any time, any value changes in useGameQueryStore, this component will re-render
  const selectedGenre = useGameQueryStore((s) => s.selectedGenre); // If I use a selector, the component only dependent on selectedGenre.
  const selectedPlatform = useGameQueryStore((s) => s.selectedPlatform); // If I use a selector, the component only dependent on selectedPlatform and selectedGenre.

  const heading = `${selectedPlatform?.name || ""} ${selectedGenre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
