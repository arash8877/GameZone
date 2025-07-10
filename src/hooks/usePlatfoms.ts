import { useEffect, useState } from "react";
import apiClient from "../components/services/api-client";
import { CanceledError } from "axios";



interface PlatformProps {
  id: number;
  name: string;
  slug: string;
}

interface FetchPlatformsResponse {
    results: PlatformProps[];
    count: number;
  }

//------------------------- useGames Hook -------------------------
const usePlatforms = () => {
    const [platforms, setPlatforms] = useState<PlatformProps[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(true);
  
    useEffect(() => {
      setLoading(true);
      apiClient
        .get<FetchPlatformsResponse>("/platforms/lists/parents")
        .then((res) => {
          setPlatforms(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
    }, []);
  
    return { platforms, error, isLoading };
  };
  
  export default usePlatforms;