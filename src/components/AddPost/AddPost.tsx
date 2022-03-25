import { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { IState } from '../../redux/store'
import { tmsFetch } from '../../services/helpers'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import cls from './AddPost.module.css'
import defaultImg from './name.png'

export const AddPost = () => {
  const theme = useSelector((state: IState) => state.themeReducer.currentTheme)
  const [image, setImage] = useState<string>('')
  const [imageFile, setImageFile] = useState<Blob | null>(null)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [lessonNum, setLessonNum] = useState('')

  const onLoad = (e: any) => {
    setImage(e.target.files[0])
    setImageFile(e.target.files[0])
    const reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload = (e: any) => {
      setImage(e.target.result)
    }
  }

  const createNewPost = async () => {
    const formData = new FormData()

    if (imageFile) {
      formData.append('image', imageFile)
    }
    formData.append('title', title)
    formData.append('text', text)
    formData.append('lesson_num', lessonNum)

    const resp = await tmsFetch(
      'https://studapi.teachmeskills.by/blog/posts/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'form/multipart',
        },
        body: formData,
      }
    )
  }

  return (
    <section style={{ background: theme.background }}>
      <div className={cls.container}>
        <div className={cls.wrap}>
          <h2 style={{ color: theme.text }}>Add new post</h2>
          <NavLink
            to='/'
            style={{ color: theme.greyText }}
            className={cls.btnBack}
          >
            &lt; Back
          </NavLink>
          <div className={cls.wrapInfoPost}>
            <div className={cls.infoPost}>
              <Input
                text='Title'
                id='title'
                type='text'
                onChange={() => setTitle(title)}
              />
              <Input
                text='Lesson Number'
                id='lesson'
                type='text'
                onChange={() => setLessonNum(lessonNum)}
              />
              <label
                className={cls.textareaLabel}
                htmlFor='textarea'
                style={{ color: theme.greyText }}
              >
                Text
              </label>
              <textarea className={cls.textarea} onChange={(e) => setText(e.target.value)} id='textarea'></textarea>
            </div>
            <div className={cls.imgPost}>
              <p
                style={{ color: theme.greyText }}
                className={cls.imgPostTitile}
              >
                Image
              </p>

              <button style={{ position: 'relative' }}>
                {image ? null : (
                  <input className={cls.input}
                    type={'file'}
                    accept='image/*'
                    onChange={onLoad}
                  />
                )}
                Add
              </button>

              <div className={cls.deleteImgBlock}>
                <img
                  style={{ width: '300px' }}
                  alt='img'
                  src={image ? image : defaultImg}
                />
                <button
                  onClick={() => {
                    setImage('')
                    setImageFile(null)
                  }}
                  className={cls.deleteImg}
                >
                  X
                </button>
              </div>
            </div>
          </div>
          <div className={cls.addBtn}>
            <Button text='Add' onClick={createNewPost} />
          </div>
        </div>
      </div>
      <img className={cls.backImg} alt='img' src='/images/addPost.png' />
    </section>
  )
}
