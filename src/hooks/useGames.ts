import React, { useEffect, useState } from "react";
import apiClient from "../components/services/api-client";
import { CanceledError } from "axios";
import { GenreProps } from "./useGenres";

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
const useGames = (selectedGenre: GenreProps | null, selectedPlatform: PlatformProps | null) => {
  const [games, setGames] = useState<GameProps[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games", {
        params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id },
      })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
  }, [selectedGenre?.id, selectedPlatform?.id]);

  return { games, error, isLoading };
};

export default useGames;
