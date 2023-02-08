import Image from "next/image"
import { BsLink45Deg } from "react-icons/bs";
import { getMovies } from "../../lib/get-movies";
import MovieSwiper from '../movieSwiper'

export async function generateStaticParams() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json()
  return res.results.map((movie) => ({
    movie: toString(movie.id),
  }))
}

export default async function MovieDetails({ params }) {
  const { movie } = params
  const imagePath = 'https://image.tmdb.org/t/p/original'
  const singleRes = await getMovies(movie, false);
  let similarParamStr = movie + "/similar";
  const similarRes = await getMovies(similarParamStr, false);

  return (
    <div>
      <section className="mb-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl mb-2">{singleRes.title}</h2>
        <h2 className="text-xl md:text-2xl">{singleRes.release_date}</h2>
        <h2 className="text-lg">Runtime: {singleRes.runtime} minutes</h2>
        {singleRes.homepage &&
          <a href={singleRes.homepage} target="_blank" className="text-base flex items-center hover:text-yellow-600 text-base"><span>Homepage</span><BsLink45Deg /></a>
        }
        <Image
          className="my-12 w-full rounded"
          alt={singleRes.title}
          src={imagePath + singleRes.backdrop_path}
          width={1000}
          height={1000}
          priority
        />
        <p className="text-lg">{singleRes.overview}</p>
      </section>
      <section>
        <h3 className="text-2xl font-medium mb-10 border-l-4 border-yellow-600 pl-2 dark:text-white">You may also like :</h3>
        {similarRes && <MovieSwiper similarRes={similarRes} />}
      </section>

    </div>
  )
}