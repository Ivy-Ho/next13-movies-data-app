import Movie from "./movie"

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&region=TW`)
  const res = await data.json()

  const upComingData = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&region=TW`)
  const upComingRes = await upComingData.json()
  return (
    <main>
      <section className="mb-10">
        <h1 className="text-2xl text-center font-medium mb-6">Now Playing Movies</h1>
        <div className="grid gap-16 grid-cols-fluid">
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
        <h1 className="text-2xl text-center font-medium mb-6">Upcoming Movies</h1>
        <div className="grid gap-16 grid-cols-fluid">
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

