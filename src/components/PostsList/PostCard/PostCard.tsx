import { IPosts } from '../PostList'
import cls from './PostCard.module.css'
import defaltImage from './name.png'

interface IPostCard extends IPosts {
  getInfoPost: () => void
}

export const PostCard = ({ text, title, image, id, getInfoPost }: IPostCard) => {
  const imgError = 'https://tms-studapi-dev.s3.amazonaws.com/media/%5Bobject%20Object%5D'
  const currentImg = image === imgError ? defaltImage : image
   return (
    <div onClick={getInfoPost} className={cls.postCard}>
      <img src={currentImg} alt='img' />
      <div className={cls.postText}>
        <h2>{title}</h2>
        <p>{text}</p>
        <p className={cls.postDate}>13.09.2021</p>
      </div>
    </div>
  )
}
