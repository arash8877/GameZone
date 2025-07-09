import React, { useEffect, useState } from "react";
import apiClient from "../components/services/api-client";

export interface PlatformProps {
  id: number;
  name: string;
  slug: string;
}

export interface GameProps {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatformProps }[];
  metacritic: number;
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
      .then((res) => setGames(res.data.results) )
      // .then((res) => console.log(res.data.results[0]) )
      .catch((err) => setError(err.message));
  }, []);

  return { games, error };
};

export default useGames;
