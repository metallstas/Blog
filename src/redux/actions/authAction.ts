import { ACTIONS } from './../constans';
import { Dispatch } from 'redux'
import { IState } from '../store'
import { getProfile, loginUser } from '../../services/auth';

export interface IRegisterData {
  username: string;
  email: string;
  password: string;
}

export const register = (obj: IRegisterData) => {
  return async (dispatch: Dispatch, getState: () => IState) => {
    try {
      const resp = await fetch('https://studapi.teachmeskills.by/auth/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
      })

      const result = await resp.json()

      if(!resp.ok) {
        throw result
      }

      if(resp.ok) {
        dispatch(registerSuccess(result))
      }

    } catch (error: any) {
      dispatch(registerFailure(error))
      // console.log(error)
    }
  }
}

const loginSuccess = (profile: IPropfile) => {
  return {
    type: ACTIONS.LOGIN_SUCCESS,
    ...profile
  }
}

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const {access, refresh} = await loginUser(email, password)

      localStorage.setItem("access", access)
      localStorage.setItem("refresh", refresh)

      const profile = await getProfile()

      dispatch(loginSuccess(profile))
    } catch (error) {
      dispatch(registerFailure(error))
    }
  }
}

const registerFailure = (error: any) => {
  return {
    type: ACTIONS.REGISTER_FAILURE,
    error: error,
  }
}

interface IPropfile {
  email: string
  username: string
  id: number
}

const registerSuccess = (profile: IPropfile) => {
  return {
    type: ACTIONS.REGISTER_SUCCESS,
    ...profile,
  }
}

export const init = () => {
  return async (dispatch: Dispatch) => {
    try {

      const access = localStorage.getItem("access")

      if(access) {
        console.log(access)
        const profile = await getProfile()

        if(profile) {
          dispatch(loginSuccess(profile))
        }
      }
      
    } catch (error) {
      
    }
  }
}
