import Image from "next/image"
// import Movie from '../movie'

// export async function generateStaticParams() {
//   const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
//   const res = await data.json()
//   return res.results.map((movie) => ({
//     movie: toString(movie.id),
//   }))
// }

export default async function MovieDetails({ params }) {
  const { movie } = params
  const imagePath = 'https://image.tmdb.org/t/p/original'
  // const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`, { next: { revalidate: 0 } })
  const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`)
  const res = await data.json()

  // const similarMovieData = await fetch(`https://api.themoviedb.org/3/movie/${movie}/similar?api_key=${process.env.API_KEY}`)
  // const similarRes = await similarMovieData.json()

  return (
    <div>
      <section className="mb-5">
        <h2 className="text-2xl">{res.title}</h2>
        <h2 className="text-2xl">{res.release_date}</h2>
        <h2>Runtime: {res.runtime} minutes</h2>
        {res.homepage && <h2>Homepage: <a href={res.homepage} target="_blank">{res.homepage}</a> minutes</h2>}
        <Image
          className="my-12 w-full"
          alt={res.title}
          src={imagePath + res.backdrop_path}
          width={1000}
          height={1000}
          priority
        />
        <p>{res.overview}</p>
      </section>
      {/* <section>
        <h3 className="text-2xl font-medium mt-8 mb-6">You may also like :</h3>
        <div className="grid gap-16 grid-cols-fluid">
          {similarRes.results.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              release_date={movie.release_date}
            />
          ))}
        </div>
      </section> */}

    </div>
  )
}