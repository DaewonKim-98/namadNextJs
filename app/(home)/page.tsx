import Link from "next/link"

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies'

export const metadata = {
  title: 'Home'
}

async function getMovies() {
  const res = await fetch(API_URL)
  const json = await res.json()
  return json
}

export default async function HomePage() {
  const movies = await getMovies()
  return (
  <div>
    {movies.map(movie => {
      return (
        <li key={movie.id}><Link href={`/movie/${movie.id}`}>{movie.title}</Link></li>
      )
    })}
  </div>
)
}