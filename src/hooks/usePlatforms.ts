import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import platforms from "../data/platforms";
import APIClient from "../components/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface PlatformProps {
  id: number;
  name: string;
  slug: string;
}

// interface FetchPlatformsResponse {
//     results: PlatformProps[];
//     count: number;
//   }

//------------------------- useGames Hook -------------------------
const usePlatforms = () => {
  // const [platforms, setPlatforms] = useState<PlatformProps[]>([]);
  // const [error, setError] = useState("");
  // const [isLoading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(true);
  //   apiClient
  //     .get<FetchPlatformsResponse>("/platforms/lists/parents")
  //     .then((res) => {
  //       setPlatforms(res.data.results);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       if (err instanceof CanceledError) return;
  //       setError(err.message);
  //       setLoading(false);
  //     });
  // }, []);

  // return { platforms, error, isLoading };

  const apiClient = new APIClient<PlatformProps>("/platforms/lists/parents");

  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: platforms.length, results: platforms },
  });
};

export default usePlatforms;
