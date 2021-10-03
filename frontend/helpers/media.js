import { getUrl } from "./api"

export function getStrapiMedia(media) {
  console.log(media)
  const imageUrl = media.url.startsWith("/")
    ? getUrl(media.url)
    : media.url
  return imageUrl
}
