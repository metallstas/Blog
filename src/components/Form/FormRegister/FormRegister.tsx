import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Context, IContext } from '../../../App'
import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'
import cls from './FormRegister.module.css'

export const FormRegister = () => {
  const [checkName, setCheckName] = useState('')
  const [checkEmail, setCheckEmail] = useState('')
  const [checkPassword, setCheckPassword] = useState('')
  const [checkRepeatPassword, setCheckRepeatPassword] = useState('')
  const {theme}: IContext = useContext(Context)

  const onChangeName = (text: string) => {
    setCheckName(text)
  }
  const onChangeEmail = (text: string) => {
    setCheckEmail(text)
  }
  const onChangePassword = (text: string) => {
    setCheckPassword(text)
  }
  const onChangeRepeatPassword = (text: string) => {
    setCheckRepeatPassword(text)
  }

  return (
    <section style={{ background: theme.background }}className={cls.login}>
      <div className={cls.container}>
        <div>
          <h2>
            <NavLink to='/login' exact>
              Login
            </NavLink>{' '}
            |{' '}
            <NavLink style={{color: theme.text}}to='/registration' exact className={cls.active}>
              Registration
            </NavLink>
          </h2>
        </div>
        <form className={cls.form}>
          <Input
            type={'text'}
            id={'name'}
            text={'Name'}
            onChange={onChangeName}
          />
          <Input
            type={'email'}
            id={'email'}
            text={'Email'}
            onChange={onChangeEmail}
          />
          <Input
            type={'password'}
            id={'password'}
            text={'Password'}
            onChange={onChangePassword}
          />
          <Input
            type={'password'}
            id={'confirm-password'}
            text={'Confirm Password'}
            onChange={onChangeRepeatPassword}
          />
          <Button text={'Login'} />
        </form>
        <div className={cls.resetPassword}>
          <p style={{color: theme.greyText}}>If you have account, you can </p>
          <button style={{color: theme.text}}>Login</button>
        </div>
        <div className={cls.backImg}>
          <img src={theme.bgImage} alt='img' />
        </div>
      </div>
    </section>
  )
}
