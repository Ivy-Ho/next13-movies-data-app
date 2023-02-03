export async function getMovies(type, twRegion, page = 1) {
  let regionStr = twRegion ? "&region=TW" : "";
  const data = await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.API_KEY}${regionStr}&page=${page}`)
  const res = await data.json()

  return res;
}

// // 每隔一段時間重新 fetch 的方法 : { next: { revalidate: 0 } }
// const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`, { next: { revalidate: 0 } })