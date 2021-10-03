export function getUrl(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL ||
    "http://localhost:1337"
  }${path}`
}

export async function fetchAPI(path) {
  const reqURL = getUrl(path)
  const res = await fetch(reqURL)
  const data = await res.json()
  return data
}
