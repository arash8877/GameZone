import APIClient, { FetchResponse } from "../components/services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import useGameQueryStore from "../store";
import { PlatformProps } from "./usePlatforms";

export interface GameProps {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatformProps }[];
  metacritic: number;
  rating_top: number;
}

//------------------------- useGames Hook -------------------------
const useGames = () => {
  // const [games, setGames] = useState<GameProps[]>([]);
  // const [error, setError] = useState("");
  // const [isLoading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(true);
  //   apiClient
  //     .get<FetchGamesResponse>("/games", {
  //       params: {
  //         genres: selectedGenre?.id,
  //         platforms: selectedPlatform?.id,
  //         ordering: sortOrder,
  //         search: searchText,
  //       },
  //     })
  //     .then((res) => {
  //       setGames(res.data.results);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       if (err instanceof CanceledError) return;
  //       setError(err.message);
  //       setLoading(false);
  //     });
  // }, [selectedGenre?.id, selectedPlatform?.id, sortOrder, searchText]);

  const apiClient = new APIClient<GameProps>("/games");

  const { selectedGenre, selectedPlatform, sortOrder, searchText } = useGameQueryStore();

  return useInfiniteQuery<FetchResponse<GameProps>>({
    queryKey: ["games", selectedGenre?.id, selectedPlatform?.id, sortOrder, searchText],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: selectedGenre?.id,
          parent_platforms: selectedPlatform?.id,
          ordering: sortOrder,
          search: searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
