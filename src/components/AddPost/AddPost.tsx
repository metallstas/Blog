import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { IState } from '../../redux/store'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import cls from './AddPost.module.css'
import defaultImg from './name.png'

export const AddPost = () => {
  const theme = useSelector((state: IState) => state.themeReducer.currentTheme)

  return (
    <section style={{ background: theme.background }}>
      <div className={cls.container}>
        <div className={cls.wrap}>
          <h2 style={{ color: theme.text }}>Add new post</h2>
          <NavLink to='/' style={{color: theme.greyText}} className={cls.btnBack}>&lt; Back</NavLink>
          <div className={cls.wrapInfoPost}>
            <div className={cls.infoPost}>
              <Input text='Title' id='title' type='text' onChange={() => {}} />
              <Input text='Lesson Number' id='lesson' type='text' onChange={() => {}} />
              <label className={cls.textareaLabel} htmlFor='textarea' style={{ color: theme.greyText }}>
                Text
              </label>
              <textarea className={cls.textarea} id='textarea'></textarea>
            </div>
            <div className={cls.imgPost}>
              <p
                style={{ color: theme.greyText }}
                className={cls.imgPostTitile}
              >
                Image
              </p>
              <button>Add</button>
              <div className={cls.deleteImgBlock}>
                <img alt='img' src={defaultImg} />
                <button className={cls.deleteImg}>X</button>
              </div>
            </div>
          </div>
          <div className={cls.addBtn}>
            <Button text='Add' />
          </div>
        </div>
      </div>
      <img className={cls.backImg} alt='img' src='/images/addPost.png' />
    </section>
  )
}
