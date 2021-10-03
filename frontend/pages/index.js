import Head from "next/head"
import Image from "next/image"
import { fetchAPI } from "../helpers/api"
import { getStrapiMedia } from "../helpers/media"
import styles from "../styles/Home.module.css"

export default function Home({
  articles,
  categories,
  homepage,
}) {
  console.log(articles, categories, homepage)
  const imageurl = getStrapiMedia({
    url: "/uploads/the_internet_s_own_boy_4193ac093c.jpg",
  })
  return (
    <div className={styles.container}>

    </div>
  )
}

export async function getStaticProps(ctx) {
  const [articles, categories, homepage] =
    await Promise.all([
      fetchAPI("/articles"),
      fetchAPI("/categories"),
      fetchAPI("/homepage"),
    ])

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  }
}
