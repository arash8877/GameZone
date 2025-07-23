import { Spinner, Text } from '@chakra-ui/react';
import useTrailers from '../hooks/useTrailers';

interface iProps {
  gameId: number;
}

const GameTrailer = ({ gameId }: iProps) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;
  if (error) throw error;

  if (!data?.results || data.results.length === 0) return null;

  return (
    <video
      src={data?.results[0]?.data[480]}
      poster={data?.results[0]?.preview}
      controls

    />
  );
};

export default GameTrailer;
