import { Image, SimpleGrid, Spinner } from '@chakra-ui/react';
import useScreenShoots from '../hooks/useScreenshots';

interface iProps {
  gameId: number;
}

const GameScreenshots = ({ gameId }: iProps) => {
  const { data, error, isLoading } = useScreenShoots(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return <SimpleGrid columns={{ base: 1, md: 2 }} gap={2} marginTop={5}>
    {data?.results.map(file => 
        <Image key={file.id} src={file.image}/>
    )}
  </SimpleGrid>;
};

export default GameScreenshots;
