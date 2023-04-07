import { MovieType } from "@/interfaces.tsx/moviesInterface";
import axios from "axios";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

export default function Movie({ data: movie }: { data: MovieType }) {
  // const { query } = useRouter();
  // console.log("router", query.id);
  // const [data, setData] = useState<MovieType | null>(null);

  // useEffect(() => {
  //   fetch(`http://localhost:4545/movies/${query.id}`)
  //     .then((res) => res.json())
  //     .then((res) => setData(res));
  // }, [query.id]);

  return (
    <div>
      <>
        <h2>{movie.title}</h2>
        <picture>
          <img src={movie.poster} alt="sample" />
        </picture>
        <p>{movie.fullplot}</p>
      </>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios
    .get(`http://localhost:4545/movies-ids`)
    .then((res) => res.data)
    .catch((err) => console.log(err));

  // const resJson = await res.data.json();
  const paths = await res.map((id: { _id: string }) => ({
    params: { id: id._id },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

interface MovieProps {
  data: MovieType | null;
}

export const getStaticProps: GetStaticProps<MovieProps> = async ({
  params,
}: GetStaticPropsContext) => {
  const res = await fetch(`http://localhost:4545/movies/${params?.id}`);
  const resJson = await res.json();
  return {
    props: {
      data: resJson,
    },
  };
};
