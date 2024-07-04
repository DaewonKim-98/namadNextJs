import { API_URL } from "../app/(home)/page"

async function getInfo(id:string) {
  const res = await fetch(`${API_URL}/${id}`)
  const json = await res.json()
  return json
}

export default async function MovieInfo({id}:{id:string}) {
  const info = await getInfo(id)
  return <h6>{JSON.stringify(info)}</h6>
}