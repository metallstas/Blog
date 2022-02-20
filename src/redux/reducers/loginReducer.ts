
export interface ILoginForm {
  name: string;
  email: string;
}

const defaultState: ILoginForm = {
  name: '',
  email: '',
}

export const loginReducer = (state = defaultState, action: any) => {
  return state
}
