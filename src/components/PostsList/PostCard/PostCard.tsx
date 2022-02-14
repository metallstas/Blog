import { IPosts } from '../PostList'
import cls from './PostCard.module.css'
import defaltImage from './name.png'
import { useHistory } from 'react-router-dom'

interface IPostCard extends IPosts {
}

export const PostCard = ({ text, title, image, id, date}: IPostCard) => {
  const imgError = 'https://tms-studapi-dev.s3.amazonaws.com/media/%5Bobject%20Object%5D'
  const currentImg = image === imgError ? defaltImage : image

  const history = useHistory()

  const getInfoPost = (postId: number) => {
    history.push('/post/' + postId)
  }

   return (
    <div onClick={() => getInfoPost(id)} className={cls.postCard}>
      <img src={currentImg} alt='img' />
      <div className={cls.postText}>
        <h2>{title}</h2>
        <p>{text}</p>
        <p className={cls.postDate}>{date}</p>
      </div>
    </div>
  )
}
