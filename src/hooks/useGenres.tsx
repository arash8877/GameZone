import React, { useEffect, useState } from "react";
import apiClient from "../components/services/api-client";
import { CanceledError } from "axios";

export interface GenreProps {
    id: number;
    name: string;
    image_background: string;
  }

export interface PlatformProps {
  id: number;
  name: string;
  slug: string;
}

export interface GenreProps {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatformProps }[];
  metacritic: number;
}

interface FetchGenresResponse {
  results: GenreProps[];
  count: number;
}

//------------------------- useGames Hook -------------------------
const useGenres = () => {
  const [genres, setGenres] = useState<GenreProps[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres")
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
