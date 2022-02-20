import { ACTIONS } from "../constans";
import { IPost } from "../reducers/postsReducer";

export const addPosts = (posts: IPost[]) => {
  return {type: ACTIONS.ADD_POSTS, posts}
}

export const setOffset = (step: number) => {
  return {type: ACTIONS.SET_OFFSET, step}
}

export const clearState = () => {
  return {type: ACTIONS.CLEAR_STATE}
}

export const postCurrent = ((post: IPost) => {
  return {type: ACTIONS.POST, post}
})
