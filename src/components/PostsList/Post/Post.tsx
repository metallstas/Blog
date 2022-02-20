import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import cls from './Post.module.css'
import { IState } from '../../../redux/store'
import { postCurrent } from '../../../redux/actions/postsAction'

export const Post = () => {
  const post = useSelector((state: IState) => state.postsReducer.post)
  const dispatch = useDispatch()
  const params: {postId: string} = useParams()

  useEffect(() => {
    getPostInfo()
  }, [])

  const getPostInfo = async () => {
    const resp = await fetch(
      'https://studapi.teachmeskills.by/blog/posts/' + params.postId
    )
    const post = await resp.json()
    dispatch(postCurrent(post))
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
