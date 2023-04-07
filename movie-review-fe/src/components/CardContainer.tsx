// import { useEffect, useState } from "react";
import MovieType from "@/interfaces.tsx/moviesInterface";
import Card from "./Card";

type Proptype = {
  movies: MovieType[];
};

export default function CardContainer({ movies }: Proptype): JSX.Element {
  // const [movies, setMovies] = useState<MovieType[] | null>(null);

  // useEffect(() => {
  //   fetch("http://localhost:4545/movies")
  //     .then((response) => response.json())
  //     .then((res) => {
  //       console.log(res);
  //       setMovies(res);
  //     });
  // }, []);
  console.log(movies);
  return (
    <>
      <div className="flex  h-300 w-400 justify-between mx-auto mt-3 overflow-scroll">
        {movies.map((movie: MovieType, index: number) => (
          <Card movie={movie} key={index} />
        ))}
      </div>
    </>
  );
}
