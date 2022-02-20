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
  post: IPost
}

const defaultState: IPostsState = {
  posts: [],
  offset: 0,
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
    return { ...state, posts: [...state.posts, ...action.posts] }
  }

  if (action.type === ACTIONS.SET_OFFSET) {
    return { ...state, offset: state.offset + action.step }
  }

  if (action.type === ACTIONS.CLEAR_STATE) {
    return { ...defaultState }
  }

  if (action.type === ACTIONS.POST) {
    return {...state, post: action.post}
  }

  return state
}
