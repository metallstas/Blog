import { Dispatch } from 'redux'
import { DATA_LOADING_STEP } from '../../components/PostsList/PostList'
import { ACTIONS } from '../constans'
import { IPost } from '../reducers/postsReducer'

export const addPosts = (posts: IPost[]) => {
  return { type: ACTIONS.ADD_POSTS, posts }
}

export const setOffset = (step: number) => {
  return { type: ACTIONS.SET_OFFSET, step }
}

export const clearState = () => {
  return { type: ACTIONS.CLEAR_STATE }
}

export const postCurrent = (post: IPost) => {
  return { type: ACTIONS.POST, post }
}

export const searchPostsText = (searchtextPosts: string) => {
  return { type: ACTIONS.TEXT_SEARCH_POSTS, searchPosts: searchtextPosts }
}

export const addSearchPosts = (posts: IPost[]) => {
  return { type: ACTIONS.ADD_SEARCH_POSTS, posts }
}

export const fetchPost = (postId: string) => {
  return async (dispatch: Dispatch) => {
    const resp = await fetch(
      'https://studapi.teachmeskills.by/blog/posts/' + postId
    )
    const post = await resp.json()
    dispatch(postCurrent(post))
  }
}

export const fetchPosts = (offset: number = 0) => {
  return async (dispatch: Dispatch) => {
    const resp = await fetch(
      `https://studapi.teachmeskills.by/blog/posts/?limit=${DATA_LOADING_STEP}&offset=${offset}`
    )
    const data = await resp.json()
    const postsData = await data.results
    dispatch(addPosts(postsData))
  }
}

export const searchPosts = (textPosts: string) => {
  return async (dispatch: Dispatch) => {
    const resp = await fetch(
      `https://studapi.teachmeskills.by/blog/posts/?limit=100&search=${textPosts}`
    )
    const data = await resp.json()
    dispatch(addSearchPosts(data.results))
  }
}
