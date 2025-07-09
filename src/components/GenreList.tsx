import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";


//----------------- GenreList Component -----------------
const GenreList = () => {
  const { genres, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" size="xl" />;

  //----------------- JSX -----------------
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image boxSize="32px" borderRadius={8} src={genre.image_background} objectFit="cover" />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
