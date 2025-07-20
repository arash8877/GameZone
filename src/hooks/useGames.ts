import React, { useEffect, useState } from "react";
import { CanceledError } from "axios";
import apiClient from "../components/services/api-client";
import { GenreProps } from "./useGenres";
import { PlatformProps } from "./usePlatforms";
import { useQuery } from "@tanstack/react-query";

export interface GameProps {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatformProps }[];
  metacritic: number;
  rating_top: number;
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

  useQuery({
    queryKey: ["games"],
    queryFn: () =>
      apiClient
        .get<FetchGamesResponse>("/games", {
          params: {
            genres: selectedGenre?.id,
            platforms: selectedPlatform?.id,
            ordering: sortOrder,
            search: searchText,
          },
        })
        .then((res) => res.data),
  });
};

export default useGames;
