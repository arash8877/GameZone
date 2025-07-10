import { Button, HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres, { GenreProps } from "../hooks/useGenres";

interface GenreListProps {
  onSelectGenre: (genre: GenreProps) => void;
  selectedGenre?: GenreProps | null;
}

//----------------- GenreList Component -----------------
const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
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
            <Button
              fontSize="lg"
              variant="link"
              onClick={() => onSelectGenre(genre)}
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
