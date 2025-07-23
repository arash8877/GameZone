import { useQuery } from '@tanstack/react-query';
import APIClient from '../components/services/api-client';

interface iTrailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<iTrailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ['trailers', gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;
