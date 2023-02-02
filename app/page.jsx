import Movie from "./movie"

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&region=TW`)
  const res = await data.json()

  const upComingData = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&region=TW`)
  const upComingRes = await upComingData.json()
  return (
    <main>
      <section className="mb-16">
        <h2 className="text-2xl font-medium mb-10 border-l-4 border-yellow-600 pl-2 dark:text-white">Now Playing Movies</h2>
        <div className="grid gap-16 grid-cols-fluid px-6">
          {res.results.map((movie) => (
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

