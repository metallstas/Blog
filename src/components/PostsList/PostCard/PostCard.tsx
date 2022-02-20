import cls from './PostCard.module.css'
import { useHistory } from 'react-router-dom'
import { IPost } from '../../../redux/reducers/postsReducer'

export const PostCard = ({ text, title, image, id, date}: IPost) => {

  const history = useHistory()

  const getInfoPost = (postId: number) => {
    history.push('/post/' + postId)
  }

   return (
    <div onClick={() => getInfoPost(id)} className={cls.postCard}>
      <img src={image} alt='img' />
      <div className={cls.postText}>
        <h2>{title}</h2>
        <p>{text}</p>
        <p className={cls.postDate}>{date}</p>
      </div>
    </div>
  )
}
