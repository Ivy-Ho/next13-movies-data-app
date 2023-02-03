import Movie from "./movie"
import { getMovies } from "../lib/get-movies";

export default async function Home() {
  const nowPlayingRes = await getMovies("now_playing", true);

  const upComingRes = await getMovies("upcoming", true);

  return (
    <main>
      <section className="mb-16">
        <h2 className="text-2xl font-medium mb-10 border-l-4 border-yellow-600 pl-2 dark:text-white">Now Playing Movies</h2>
        <div className="grid gap-16 grid-cols-fluid px-6">
          {nowPlayingRes.results.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-medium mb-10 border-l-4 border-yellow-600 pl-2 dark:text-white">Upcoming Movies</h2>
        <div className="grid gap-16 grid-cols-fluid px-6">
          {upComingRes.results.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

