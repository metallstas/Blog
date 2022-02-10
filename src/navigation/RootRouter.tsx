import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { PostList } from '../components/PostsList/PostList'
import { Header } from '../components/Header/Header'
import { FormLogin } from '../components/Form/FormLogin/FormLogin'
import { FormRegistr } from '../components/Form/FormRegistr/FormRegistr'
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
          <FormRegistr />
        </Route>
        <Route path='/post/:postId'>
          <Post />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
