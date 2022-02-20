import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { IState } from '../../../redux/store'
import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'
import cls from './FormRegister.module.css'

export const FormRegister = () => {

  const theme = useSelector((state: IState) => state.themeReducer.currentTheme)

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
            onChange={() => {}}
          />
          <Input
            type={'email'}
            id={'email'}
            text={'Email'}
            onChange={() => {}}
          />
          <Input
            type={'password'}
            id={'password'}
            text={'Password'}
            onChange={() => {}}
          />
          <Input
            type={'password'}
            id={'confirm-password'}
            text={'Confirm Password'}
            onChange={() => {}}
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
