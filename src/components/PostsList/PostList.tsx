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
  const [limit, setLimit] = useState(6)

  const getPosts = async () => {
    const resp = await fetch(
      `https://studapi.teachmeskills.by/blog/posts/?limit=${limit}`
    )
    const data = await resp.json()
    setPosts(data.results)
  }

  const handleLimitPost = () => {
    if(limit > posts.length) {
      return 
    }
    setLimit((limit) => limit + 6)
  }

  useEffect(() => {
    getPosts()
  }, [limit])

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
        <div className={cls.showMoreBlock}>
          {limit > posts.length ? (
            null
          ) : (
            <button className={cls.showMore} onClick={handleLimitPost}>
              Show more
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
