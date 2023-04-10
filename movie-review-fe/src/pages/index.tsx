// import CardContainer from "@/components/CardContainer";
import Layout from "@/components/Layout";
import { MovieType } from "@/interfaces.tsx/moviesInterface";
import Link from "next/link";

export default function Home(props: { movies: MovieType[] }): JSX.Element {
  const { movies } = props;

  return (
    <div className="max-w-5xl mx-auto mt-12">
      <Layout>
        <div className="bg-white">
          <div className="flex justify-between bg-white mt-6">
            <div className="ms-2 ps-2 border-l-4 border-red-500 font-medium">
              NEW & UPCOMING MOVIES
            </div>
            <div className="me-2 text-blue-600 font-semibold cursor-pointer">
              VIEW ALL
            </div>
          </div>
          <div className="flex gap-3 flex-wrap justify-between p-3 mx-auto">
            {movies.map((movie: MovieType, index: number) => (
              <div
                className="flex flex-col justify-between w-1/6 h-1/6"
                key={index}
              >
                <picture>
                  <img src={movie.poster} alt="sample" />
                </picture>
                <h5>{movie.title}</h5>
                <Link href={`movies/${movie._id}`} className="m-5">
                  <div className="bg-slate-400 text-black border-1 rounded text-center text-lg hover:bg-slate-900 hover:text-white">
                    see more
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:4545/movies");
  const movies = await response.json();
  return {
    props: {
      movies: movies,
    },
  };
}
