import { KeyboardEvent, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IPost } from '../../redux/reducers/postsReducer'
import { PostCard } from './PostCard/PostCard'
import cls from './PostList.module.css'
import { IState, store } from '../../redux/store'
import {
  clearState,
  fetchPosts,
  searchPosts,
  searchPostsText,
} from '../../redux/actions/postsAction'
import { NavLink } from 'react-router-dom'

export const DATA_LOADING_STEP = 9

function debounce(fun: (text: string) => void, ms: number) {
  let isCooldown = false

  return function (searchText: string) {
    if (isCooldown) {
      return
    }

    fun(searchText)
    isCooldown = true
    setTimeout(() => {
      isCooldown = false
    }, ms)
  }
}

const delayedSearch = debounce(
  (text: string) => store.dispatch(searchPosts(text)),
  1000
)

export const PostList = () => {
  const [showButton, setShowButton] = useState<boolean>(false)
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

  const handleSearchPosts = useCallback(
    (text: string) => {
      setShowButton(true)
      dispatch(searchPostsText(text))
      delayedSearch(text)
    },
    [textSearchPosts]
  )

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        dispatch(searchPosts(textSearchPosts))
      }
    },
    [textSearchPosts]
  )

  return (
    <section className={cls.postList}>
import React from 'react';
      <div className={cls.container}>
        <div className={cls.addPostsWrap}>
          <div className={cls.addPostBlock}>
            <h2
              className={cls.allPosts}
              onClick={() => {
                dispatch(clearState())
                dispatch(fetchPosts())
                setShowButton(false)
              }}
            >
              All Posts
            </h2>
            <NavLink to='/add-post' exact>
              + Add
            </NavLink>
          </div>
          <div className={cls.searchPosts}>
            <label htmlFor='search'>Search</label>
            <input
              value={textSearchPosts}
              id='search'
              type='text'
              onChange={(e) => handleSearchPosts(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e)}
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
          {(offset !== posts.length) || showButton ? null : (
            <button className={cls.showMore} onClick={handleLimitPosts}>
              Show more
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
