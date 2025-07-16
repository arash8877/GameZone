import { useEffect, useState } from "react";
import apiClient from "../components/services/api-client";
import { CanceledError } from "axios";
import genres from "../data/genres";
import { PlatformProps } from "./usePlatforms";

export interface GenreProps {
    id: number;
    name: string;
    image_background: string;
  }


interface FetchGenresResponse {
  results: GenreProps[];
  count: number;
}

//------------------------- useGames Hook -------------------------
const useGenres = () => {
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

  return { genres: genres, error: null, isLoading:false };
};

export default useGenres;




// instead of getting genres from the API every time the page is rendered, we are using a static data file
// to avoid unnecessary API calls and improve performance.