import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import genres from "../data/genres";
import { PlatformProps } from "./usePlatforms";
import apiClient from "../components/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface GenreProps {
  id: number;
  name: string;
  image_background: string;
}

interface FetchGenresResponse {
  count: number;
  results: GenreProps[];
}

//------------------------- useGames Hook -------------------------
const useGenres = () =>
  // const [genres, setGenres] = useState<GenreProps[]>([]);
  // const [error, setError] = useState("");
  // const [isLoading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(true);
  //   apiClient
  //     .get<FetchGenresResponse>("/genres")
  //     .then((res) => {
  //       setGenres(res.data.results);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       if (err instanceof CanceledError) return;
  //       setError(err.message);
  //       setLoading(false);
  //     });
  // }, []);

  useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.get<FetchGenresResponse>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: {count: genres.length, results: genres},
  });

export default useGenres;
