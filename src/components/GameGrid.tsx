import React, { useEffect, useState } from "react";
import apiClient from "./services/api-client";

interface GameProps {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  results: GameProps[];
  count: number;
}

//------------------------- GameGrid Component -------------------------
const GameGrid = () => {
  const [games, setGames] = useState<GameProps[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  //-------------------- JSX --------------------
  return (
    <>
      {error && <p>Error: {error}</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
