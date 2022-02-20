export interface IRegitration {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const defaultState: IRegitration = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export const registrationReducer = (state = defaultState, action: any) => {
  return state
}
