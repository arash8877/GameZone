import { useQuery } from "@tanstack/react-query";
import APIClient from "../components/services/api-client";
import { GameProps } from "./useGames";


const apiClient = new APIClient<GameProps>('/games');


const useGame = (slug: string) => useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
})

export default useGame;