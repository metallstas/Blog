import { useEffect, useState } from 'react'
import { PostCard } from './PostCard/PostCard'
import cls from './PostList.module.css'

export interface IPosts {
  text: string
  title: string
  image: string
  id: number
  date: string
}

export const PostList = () => {
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    const resp = await fetch(
      'https://studapi.teachmeskills.by/blog/posts/?limit=100'
    )
    const data = await resp.json()
    setPosts(data.results)
    console.log(data)

  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <section className={cls.postList}>
      <div className={cls.container}>
        <div className={cls.postListItem}>
          {posts.map((post: IPosts) => (
            <PostCard
              key={post.id}
              id={post.id}
              text={post.text}
              title={post.title}
              image={post.image}
              date={post.date}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
