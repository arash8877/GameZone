import React, { useEffect, useState } from "react";
import apiClient from "../components/services/api-client";
import { CanceledError } from "axios";
import { GenreProps } from "./useGenres";
import { PlatformProps } from "./usePlatforms";

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
const useGames = (
  selectedGenre: GenreProps | null,
  selectedPlatform: PlatformProps | null,
  sortOrder: string,
  searchText: string
) => {
  const [games, setGames] = useState<GameProps[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games", {
        params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id, ordering: sortOrder, search: searchText },
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
  }, [selectedGenre?.id, selectedPlatform?.id, sortOrder, searchText]);

  return { games, error, isLoading };
};

export default useGames;
