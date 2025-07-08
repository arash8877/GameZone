import React, { useEffect, useState } from "react";
import apiClient from "../components/services/api-client";


export interface GameProps {
    id: number;
    name: string;
    background_image: string;
  }
  
  interface FetchGamesResponse {
    results: GameProps[];
    count: number;
  }

//------------------------- useGames Hook -------------------------
const useGames = () => {
    const [games, setGames] = useState<GameProps[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
      apiClient
        .get<FetchGamesResponse>("/games")
        .then((res) => setGames(res.data.results))
        .catch((err) => setError(err.message));
    }, []);

    return { games, error };
}


export default useGames;