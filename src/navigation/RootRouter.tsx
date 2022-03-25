import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { PostList } from '../components/PostsList/PostList'
import { Header } from '../components/Header/Header'
import { FormLogin } from '../components/Form/FormLogin/FormLogin'
import { FormRegister } from '../components/Form/FormRegister/FormRegister'
import { Post } from '../components/PostsList/Post/Post'
import { AddPost } from '../components/AddPost/AddPost'
import { ConfirmEmail } from '../components/ConfirmEmail/ConfirmEmail'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { init } from '../redux/actions/authAction'
import { IState } from '../redux/store'

export const RootRouter = () => {
  const isLoggedIn = useSelector(
    (state: IState) => state.authReducer.isLoggedIn
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(init())
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact>
          <PostList />
        </Route>
        <Route path='/login' exact>
          <FormLogin />
        </Route>
        <Route path='/registration' exact>
          <FormRegister />
        </Route>
        <Route path='/post/:postId' exact>
          <Post />
        </Route>
        <Route path='/add-post' exact>
          {isLoggedIn ? <AddPost /> : <Redirect to='login' />}
        </Route>
        <Route path='/confirm' exact>
          <ConfirmEmail />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
