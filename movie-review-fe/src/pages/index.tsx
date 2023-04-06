import CardContainer from "@/components/CardContainer";
import Layout from "@/components/Layout";
import MovieType from "@/interfaces.tsx/moviesInterface";

export default function Home(props: { movies: MovieType[] }): JSX.Element {
  const { movies } = props;
  console.log(movies);
  return (
    <>
      <Layout>
        <div>
          <CardContainer movies={movies} />
        </div>
      </Layout>
    </>
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
