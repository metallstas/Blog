import { ACTIONS } from "../constans"

export const setIsActiveNavBar = (isActive: boolean) => {
  return {type: ACTIONS.CHANGE_ACTIVE_NAV_BAR, isActive}
}
