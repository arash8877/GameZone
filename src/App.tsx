import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { GenreProps } from "./hooks/useGenres";

//----------------- App Component -----------------
export default function App() {
  const [selectedGenre, setSelectedGenre] = useState<GenreProps | null>(null);

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
        <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
      </GridItem>

      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre}/>
      </GridItem>
    </Grid>
  );
}
