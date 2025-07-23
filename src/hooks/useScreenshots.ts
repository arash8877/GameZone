import { useQuery } from '@tanstack/react-query';
import APIClient from '../components/services/api-client';

interface iScreenshot {
  id: number;
  image: string;
  width: string;
  height: string;
}

const useScreenShoots = (gameId: number) => {
  const apiClient = new APIClient<iScreenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ['screenShots', gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenShoots;