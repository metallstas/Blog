import { DATA_LOADING_STEP } from '../../components/PostsList/PostList'
import { ACTIONS } from '../constans'
export interface IPost {
  text: string
  title: string
  image: string
  id: number
  date: string
}
export interface IPostsState {
  posts: IPost[]
  offset: number
  searchPosts: string
  post: IPost
}

const defaultState: IPostsState = {
  posts: [],
  offset: 0,
  searchPosts: '',
  post: {
    text: '',
    title: '',
    image: '',
    id: 0,
    date: '',
  },
}

export const postsReducer = (state = defaultState, action: any) => {
  if (action.type === ACTIONS.ADD_POSTS) {
    return {
      ...state,
      posts: [...state.posts, ...action.posts],
      offset: state.offset + DATA_LOADING_STEP,
    }
  }

  if (action.type === ACTIONS.CLEAR_STATE) {
    return { ...defaultState }
  }

  if (action.type === ACTIONS.POST) {
    return { ...state, post: action.post }
  }

  if (action.type === ACTIONS.ADD_SEARCH_POSTS) {
    return { ...state, posts: action.posts}
  }

  if (action.type === ACTIONS.TEXT_SEARCH_POSTS) {
    return { ...state, searchPosts: action.searchPosts}
  }

  return state
}
