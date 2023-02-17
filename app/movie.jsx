import Link from "next/link"
import Image from "next/image"
import { AiFillStar } from "react-icons/ai";

export default function Movie({ title, id, poster_path, release_date, vote_average }) {
  const imagePath = 'https://image.tmdb.org/t/p/original'
  return (
    <div className="z-10 relative bg-white rounded px-4 pt-4 pb-6 shadow-lg transition hover:shadow-black/30 hover:dark:shadow-white/40 hover:-translate-y-2">
      <Link href={`/${id}`}>
        <Image
          src={imagePath + poster_path}
          width={800}
          height={800}
          alt={title}
          className="rounded mb-2"
        />
      </Link>
      <h1 className="truncate text-lg text-yellow-600">{title}</h1>
      <h2 className="text-sm text-gray-600">{release_date}</h2>
      {vote_average && <h2 className="text-sm text-gray-600 flex content-center justify-end"><AiFillStar className="text-yellow-600 text-xl mr-1" />{vote_average}</h2>}
    </div>
  )
}