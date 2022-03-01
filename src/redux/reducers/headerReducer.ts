import { ACTIONS } from "../constans"

export interface IHeader {
  isActiveNavBar: boolean
}

const defaultState: IHeader = {
  isActiveNavBar: false,
}

export const headerReducer = (state = defaultState, action: any) => {
  if(action.type === ACTIONS.CHANGE_ACTIVE_NAV_BAR) {
    return {isActiveNavBar: action.isActive}
  }
  return state
}
