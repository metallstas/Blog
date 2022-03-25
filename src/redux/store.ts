import { authReducer } from './reducers/authReducer';
import { headerReducer, IHeader } from './reducers/headerReducer'
import { IThemeState, themeReducer } from './reducers/themeReducer'
import { IRegitration, registrationReducer } from './reducers/registrationReducer'
import { ILoginForm, loginReducer } from './reducers/loginReducer'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { IPostsState, postsReducer } from './reducers/postsReducer'
import { IAuthState } from './reducers/authReducer'
import thunk from 'redux-thunk'
export interface IState {
  postsReducer: IPostsState;
  loginReducer: ILoginForm;
  registrationReducer: IRegitration;
  themeReducer: IThemeState;
  headerReducer: IHeader;
  authReducer: IAuthState
}

export const store = createStore(
  combineReducers({ postsReducer, loginReducer, registrationReducer, themeReducer, headerReducer, authReducer }),
  composeWithDevTools(applyMiddleware(thunk))
)
