const api = import.meta.env.VITE_APP_API_URL

export default function getPropertyById(id) {
  const property = fetch(`${api}/properties/getPropertyById/${id}`)
    .then(response => response.json())
    .then(res => res)
    .catch(error => console.log(error))

  return property
}
