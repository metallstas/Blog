import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Context, IContext } from '../../../App'
import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'
import cls from './FormLogin.module.css'

export const FormLogin = () => {
  const [checkName, setCheckName] = useState('')
  const [checkPassword, setCheckPassword] = useState('')
  const { theme }: IContext = useContext(Context)

  const onChangeName = (text: string) => {
    setCheckName(text)
  }

  const onChangePassword = (text: string) => {
    setCheckPassword(text)
  }

  return (
    <section
      style={{ background: theme.background }}
      className={cls.login}
    >
      <div className={cls.container}>
        <div>
          <h2>
            <NavLink style={{color: theme.text}} to='/login' exact className={cls.active}>
              Login
            </NavLink>{' '}
            |{' '}
            <NavLink to='/registration' exact>
              Registration
            </NavLink>
          </h2>
        </div>
        <form className={cls.form}>
          <Input
            type={'email'}
            id={'email'}
            text={'Email'}
            onChange={onChangeName}
          />
          <Input
            type={'password'}
            id={'password'}
            text={'Password'}
            onChange={onChangePassword}
          />
          <Button text={'Login'} />
        </form>
        <div className={cls.resetPassword}>
          <p style={{color: theme.greyText}}>Forgot your password?</p>
          <button style={{color: theme.text}}>Reset password</button>
        </div>
        <div className={cls.backImg}>
          <img src={theme.bgImage} alt='img' />
        </div>
      </div>
    </section>
  )
}
