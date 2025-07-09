import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image boxSize="32px" borderRadius={8} src={genre.image_background} objectFit="cover" />
            <Text fontSize="lg">
              {genre.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
