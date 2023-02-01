import Movie from "../movie"
// import Pagination from "../../pagination"

export default async function Popular({ params }) {
  const { page } = params
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&page=${page}`)
  const res = await data.json()
  return (
    <main>
      <h1 className="text-2xl text-center font-medium mb-6">Popular Movies</h1>
      <div className="grid gap-16 grid-cols-fluid">
        {res.results.map((movie) => (
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
        cate="popular"
        current_page={page}
      /> */}
    </main>
  )
}
