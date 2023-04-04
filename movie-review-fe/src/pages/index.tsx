import { useEffect, useState } from "react";

interface MovieType {
  title: string;
  year: number;
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
}

export default function Home(): JSX.Element {
  const [movies, setMovies] = useState<MovieType[] | null>(null);

  useEffect(() => {
    fetch("http://localhost:4545/movies")
      .then((response) => response.json())
      .then((res) => setMovies(res));
  }, []);

  return (
    <>
      <div>
        {movies &&
          movies.map((movie: MovieType, index: number) => (
            <div key={index} className="w-1/6 h-1/6">
              {movie.title}
            </div>
          ))}
      </div>
    </>
  );
}
