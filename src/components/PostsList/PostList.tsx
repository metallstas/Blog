import { KeyboardEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IPost } from '../../redux/reducers/postsReducer'
import { PostCard } from './PostCard/PostCard'
import cls from './PostList.module.css'
import { IState } from '../../redux/store'
import {
  clearState,
  fetchPosts,
  searchPosts,
  searchPostsText,
} from '../../redux/actions/postsAction'
import { NavLink } from 'react-router-dom'

export const DATA_LOADING_STEP = 9

export const PostList = () => {
  const [showButton, setShowButton] = useState(false)
  const offset = useSelector((state: IState) => state.postsReducer.offset)
  const posts = useSelector((state: IState) => state.postsReducer.posts)
  const textSearchPosts = useSelector(
    (state: IState) => state.postsReducer.searchPosts
  )

  useEffect(() => {
    dispatch(clearState())
    dispatch(fetchPosts())
  }, [])

  const dispatch = useDispatch()

  const handleLimitPosts = () => {
    dispatch(fetchPosts(offset))
  }

  const handleSearchPosts = (text: string) => {
    dispatch(searchPostsText(text))
  }

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (textSearchPosts) {
        setShowButton(true)
        dispatch(searchPosts(textSearchPosts))
        dispatch(clearState())
        return
      }
      dispatch(clearState())
      dispatch(fetchPosts())
      setShowButton(false)
    }
  }

  return (
    <section className={cls.postList}>
      <div className={cls.container}>
        <div className={cls.addPostsWrap}>
          <div className={cls.addPostBlock}>
            <h2
              className={cls.allPosts}
              onClick={() => {
                dispatch(clearState())
                dispatch(fetchPosts())
              }}
            >
              All Posts
            </h2>
            <NavLink to='/add-post' exact>+ Add</NavLink>
          </div>
          <div className={cls.searchPosts}>
            <label htmlFor='search'>Search</label>
            <input
              value={textSearchPosts}
              id='search'
              type='text'
              onChange={(e) => handleSearchPosts(e.target.value)}
              onKeyDown={(e) => handleKey(e)}
            />
          </div>
        </div>
        <div className={cls.postListItem}>
          {posts.length === 0 ? (
            <h1 className={cls.noPosts}>No Posts</h1>
          ) : (
            posts.map((post: IPost) => (
              <PostCard
                key={post.id}
                id={post.id}
                text={post.text}
                title={post.title}
                image={post.image}
                date={post.date}
              />
            ))
          )}
        </div>
        <div className={cls.showMoreBlock}>
          {offset > posts.length || showButton ? null : (
            <button className={cls.showMore} onClick={handleLimitPosts}>
              Show more
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
