import MovieType from "@/interfaces.tsx/moviesInterface";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Movie() {
  const { query } = useRouter();
  console.log("router", query.id);
  const [data, setData] = useState<MovieType | null>(null);

  useEffect(() => {
    fetch(`http://localhost:4545/movies/${query.id}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [query.id]);

  return (
    <div>
      {data && (
        <>
          <h2>{data.title}</h2>
          <picture>
            <img src={data.poster} alt="sample" />
          </picture>
          <p>{data.fullplot}</p>
        </>
      )}
    </div>
  );
}
