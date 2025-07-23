import { Spinner, Text } from '@chakra-ui/react';
import useTrailers from '../hooks/useTrailers';

interface iProps {
  gameId: number;
}

const GameTrailer = ({ gameId }: iProps) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (!data?.results || data.results.length === 0)
    return <p>No trailers available for this game. 🎮</p>;

  if (isLoading)
    return (
      <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" size="xl" />
    );
  if (error) throw error;

  return (
    <video
      src={data?.results[0]?.data[480]}
      poster={data?.results[0]?.preview}
      controls
      width={640}
      height={360}
      style={{ marginTop: '20px' }}
    />
  );
};

export default GameTrailer;
