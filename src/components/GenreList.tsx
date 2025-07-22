import { Button, HStack, Heading, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { GenreProps } from "../hooks/useGenres";
import useGameQueryStore from "../store";

interface GenreListProps {
  onSelectGenre: (genre: GenreProps) => void;
  selectedGenre?: GenreProps | null;
}

//----------------- GenreList Component -----------------
const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const { selectedGenre, setGenre} = useGameQueryStore();

  if (error) return null;

  if (isLoading) return <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" size="xl" />;

  //----------------- JSX -----------------
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={genre.image_background}
                objectFit="cover"
              />
              <Button
                fontSize="lg"
                variant="link"
                onClick={() => setGenre(genre)}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
