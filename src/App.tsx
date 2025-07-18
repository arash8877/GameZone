import { Box, Flex, Grid, GridItem, HStack } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { GenreProps } from "./hooks/useGenres";
import { PlatformProps } from "./hooks/usePlatforms";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

//----------------- App Component -----------------
export default function App() {
  const [selectedGenre, setSelectedGenre] = useState<GenreProps | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformProps | null>(null);
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("");

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
        <Navbar onSearch={(text) => setSearchText(text)} />
      </GridItem>
      <GridItem area="aside" paddingX={5} display={{ base: "none", lg: "block" }}>
        <GenreList
          onSelectGenre={(genre) => setSelectedGenre(genre)}
          selectedGenre={selectedGenre}
        />
      </GridItem>

      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
          <Flex marginBottom={5} gap={5}>
            <PlatformSelector
              selectedPlatform={selectedPlatform}
              onSelectPlatform={(platform) => setSelectedPlatform(platform)}
            />
            <SortSelector
              onSelectSortOrder={(order) => setSortOrder(order)}
              sortOrder={sortOrder}
            />
          </Flex>
        </Box>
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
          sortOrder={sortOrder}
          searchText={searchText}
        />
      </GridItem>
    </Grid>
  );
}
