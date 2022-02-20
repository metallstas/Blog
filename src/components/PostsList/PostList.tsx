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

const DATA_LOADING_STEP = 9

export const PostList = () => {
  const [posts, setPosts] = useState([])
  const [offset, setOffset] = useState(0)

  const getPosts = async () => {
    const resp = await fetch(
      `https://studapi.teachmeskills.by/blog/posts/?limit=${DATA_LOADING_STEP}&offset=${offset}`
    )
    const data = await resp.json()
    const postData: [] = await data.results
    setPosts(posts => [...posts, ...postData])
  }

  const handleLimitPost = () => {
    setOffset((offset) => offset + DATA_LOADING_STEP)
  }

  useEffect(() => {
    getPosts()
  }, [offset])

  return (
    <section className={cls.postList}>
      <div className={cls.container}>
        <div className={cls.addPostsBlock}>
          <h2 className={cls.allPosts}>All Posts</h2>
          <button>+ Add</button>
        </div>
        
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
          {offset + DATA_LOADING_STEP > posts.length ? (
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
