import { Flex, Grid, GridItem, HStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { GenreProps, PlatformProps } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

//----------------- App Component -----------------
export default function App() {
  const [selectedGenre, setSelectedGenre] = useState<GenreProps | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformProps | null>(null);
  const [sortOrder, setSortOrder] = useState<string>("");

  //------------------ JSX -----------------
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <GridItem area="aside" paddingX={5} display={{ base: "none", lg: "block" }}>
        <GenreList
          onSelectGenre={(genre) => setSelectedGenre(genre)}
          selectedGenre={selectedGenre}
        />
      </GridItem>

      <GridItem area="main">
        <Flex paddingLeft={2} marginBottom={5} gap={5}>
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          />
          <SortSelector 
            onSelectSortOrder={(order) => setSortOrder(order)} 
            sortOrder= {sortOrder}
          />
        </Flex>
        <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} sortOrder={sortOrder}/>
      </GridItem>
    </Grid>
  );
}
