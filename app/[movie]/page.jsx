import Image from "next/image"
import { BsLink45Deg } from "react-icons/bs";
// import MovieSwiper from '../movieSwiper'

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

  const similarMovieData = await fetch(`https://api.themoviedb.org/3/movie/${movie}/similar?api_key=${process.env.API_KEY}`)
  const similarRes = await similarMovieData.json()

  return (
    <div>
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-2">{res.title}</h2>
        <h2 className="text-xl md:text-2xl">{res.release_date}</h2>
        <h2 className="text-lg">Runtime: {res.runtime} minutes</h2>
        {res.homepage &&
          <a href={res.homepage} target="_blank" className="text-base flex items-center hover:text-yellow-600 text-base"><span>Homepage</span><BsLink45Deg /></a>
        }
        <Image
          className="my-12 w-full rounded"
          alt={res.title}
          src={imagePath + res.backdrop_path}
          width={1000}
          height={1000}
          priority
        />
        <p className="text-lg">{res.overview}</p>
      </section>
      {/* <section>
        <h3 className="text-2xl font-medium mb-10 border-l-4 border-yellow-600 pl-2 dark:text-white">You may also like :</h3>
        <MovieSwiper similarRes={similarRes} />
      </section> */}

    </div>
  )
}