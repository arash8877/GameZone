import { Grid, GridItem, Show } from "@chakra-ui/react";

export default function DashboardLayout() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="coral">
        NAV
      </GridItem>
      <GridItem area="aside" bg="gold" display={{ base: "none", lg: "block" }}>
        ASIDE
      </GridItem>

      <GridItem area="main" bg="dodgerblue">
        MAIN
      </GridItem>
    </Grid>
  );
}
