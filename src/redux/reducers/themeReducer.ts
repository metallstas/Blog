import { ACTIONS } from '../constans'

interface ITheme {
  text: string
  background: string
  bgImage: string
  greyText: string
  menuImg: string
  iconImg: string
}

export interface IThemeState {
  isDark: boolean
  currentTheme: ITheme
}

const themeLight: ITheme = {
  text: '#016EFC',
  background: '#fff',
  bgImage: '/images/bg-light.png',
  greyText: '#254050',
  menuImg: '/images/Menu-light.png',
  iconImg: '/images/ico-light.png',
}

const themeDark: ITheme = {
  text: '#fff',
  background: '#016EFC',
  bgImage: '/images/bg-dark.png',
  greyText: '#fff',
  menuImg: '/images/Menu-dark.png',
  iconImg: '/images/ico-dark.png',
}

const defaultState: IThemeState = {
  isDark: false,
  currentTheme: themeLight,
}

export const themeReducer = (state = defaultState, action: any) => {
  if (action.type === ACTIONS.CHANGE_IS_DARK) {
    
    return {isDark: !state.isDark, currentTheme: !state.isDark ? themeDark : themeLight }
  }

  return state
}
