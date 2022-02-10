import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IPosts } from '../PostList'
import cls from './Post.module.css'

interface IPost extends IPosts {
  date: string
}

export const Post = () => {
  const [post, setPost] = useState<IPost>(Object)

  const params: any = useParams()

  useEffect(() => {
    getPostInfo()
  }, [])

  const getPostInfo = async () => {
    const resp = await fetch(
      'https://studapi.teachmeskills.by/blog/posts/' + params.postId
    )
    const post = await resp.json()
    setPost(post)
  }

  return (
    <section className={cls.post}>
      <div className={cls.container}>
        <h2 className={cls.selectedPost}>Selected Post</h2>
        <div className={cls.postCard}>
          <img src={post.image} alt='img' />
          <div className={cls.postText}>
            <h2>{post.title}</h2>
            <p>{post.text}</p>
            <p className={cls.postDate}>{post.date}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
