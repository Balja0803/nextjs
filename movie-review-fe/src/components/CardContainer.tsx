import { useEffect, useState } from "react";
import MovieType from "@/interfaces.tsx/moviesInterface";
import Card from "./Card";

export default function CardContainer(): JSX.Element {
  const [movies, setMovies] = useState<MovieType[] | null>(null);

  useEffect(() => {
    fetch("http://localhost:4545/movies")
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setMovies(res);
      });
  }, []);

  return (
    <>
      <div>
        {movies &&
          movies.map((movie: MovieType, index: number) => (
            <Card movie={movie} key={index} />
          ))}
      </div>
    </>
  );
}
