import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IPost } from '../../redux/reducers/postsReducer'
import { PostCard } from './PostCard/PostCard'
import cls from './PostList.module.css'
import { IState } from '../../redux/store'
import {
  addPosts,
  clearState,
  setOffset,
} from '../../redux/actions/postsAction'

const DATA_LOADING_STEP = 9

export const PostList = () => {
  const offset = useSelector((state: IState) => state.postsReducer.offset)
  const posts = useSelector((state: IState) => state.postsReducer.posts)

  useEffect(() => {
    dispatch(clearState())
    getPosts(0)
  }, [])

  const dispatch = useDispatch()

  const getPosts = async (offset: number) => {
    const resp = await fetch(
      `https://studapi.teachmeskills.by/blog/posts/?limit=${DATA_LOADING_STEP}&offset=${offset}`
    )
    const data = await resp.json()
    const postsData = await data.results
    dispatch(addPosts(postsData))
  }

  const handleLimitPosts = () => {
    dispatch(setOffset(DATA_LOADING_STEP))
    getPosts(offset + DATA_LOADING_STEP)
  }

  return (
    <section className={cls.postList}>
      <div className={cls.container}>
        <div className={cls.addPostsBlock}>
          <h2 className={cls.allPosts}>All Posts</h2>
          <button>+ Add</button>
        </div>

        <div className={cls.postListItem}>
          {posts.map((post: IPost) => (
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
          {offset + DATA_LOADING_STEP > posts.length ? null : (
            <button className={cls.showMore} onClick={handleLimitPosts}>
              Show more
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
