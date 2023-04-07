import MovieType from "@/interfaces.tsx/moviesInterface";
import Link from "next/link";

// type Proptype = {
//   movie: MovieType;
// };

export default function Card(props: { movies: MovieType[] }): JSX.Element {
  const { movies } = props;
  return (
    <div className="flex justify-center">
      <div className="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
        <picture>
          <img className="rounded-t-lg" src={movies.poster} alt="sample" />
        </picture>

        <div className=" flex-col justify-between p-6">
          <h6 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {movies.title}
          </h6>

          <Link href={`movies/${movies._id}`}>
            <button
              type="button"
              className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              see more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:4545/movies");
  const movies = await res.json();
  return {
    props: { movies: movies },
  };
}
