import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { PostList } from '../components/PostsList/PostList'
import { Header } from '../components/Header/Header'
import { FormLogin } from '../components/Form/FormLogin/FormLogin'
import { FormRegister } from '../components/Form/FormRegister/FormRegister'
import { Post } from '../components/PostsList/Post/Post'
import { AddPost } from '../components/AddPost/AddPost'

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
        <Route path='/post/:postId' exact>
          <Post />
        </Route>
        <Route path='/add-post' exact>
          <AddPost />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
