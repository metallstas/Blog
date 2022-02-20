import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { PostList } from '../components/PostsList/PostList'
import { Header } from '../components/Header/Header'
import { FormLogin } from '../components/Form/FormLogin/FormLogin'
import { FormRegister } from '../components/Form/FormRegister/FormRegister'
import { Post } from '../components/PostsList/Post/Post'

export const RootRouter = () => {
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
        <Route path='/post/:postId'>
          <Post />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
