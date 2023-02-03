import Movie from "../movie"
// import Pagination from "./../../pagination"
import { getMovies } from "../../lib/get-movies";



export default async function TopRated({ params }) {
  const { page } = params
  const topRatedRes = await getMovies("top_rated", false, page);

  return (
    <main>
      <h2 className="text-2xl font-medium mb-10 border-l-4 border-yellow-600 pl-2 dark:text-white">Top Rated Movies</h2>
      <div className="grid gap-16 grid-cols-fluid px-6">
        {topRatedRes.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
            vote_average={movie.vote_average}
          />
        ))}
      </div>
      {/* <Pagination
        cate="topRated"
        current_page={page}
      /> */}
    </main>
  )
}
