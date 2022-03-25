import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { login } from '../../../redux/actions/authAction'
import { IState } from '../../../redux/store'
import { validationService } from '../../../services/validation'
import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'
import cls from './FormLogin.module.css'

export const FormLogin = () => {
  const theme = useSelector((state: IState) => state.themeReducer.currentTheme)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const error = useSelector((state: IState) => state.authReducer.error)
  const dispatch = useDispatch()
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })
  const isLoggedIn = useSelector((state: IState) => state.authReducer.isLoggedIn)
  const history = useHistory()

  useEffect(() => {
    if(isLoggedIn) {
      history.push('/')
    }
  }, [isLoggedIn])

  const onChangeEmail = useCallback((text) => {
    setEmail(text)
  }, [])

  const onChangePassword = useCallback((text) => {
    setPassword(text)
  }, [])

  const onClick = () => {
    const errors = {
      email: validationService.validateEmail(email),
      password: validationService.validatePassword(password),
    }
    setErrors(errors)

    // const keys = Object.keys(errors)
    const values = Object.values(errors)
    const isValid = values.every((value) => value === '')
    // const entries = Object.entries(errors)

       if (isValid) {
      dispatch(login(email, password))
    }
   
  }

  const errorsValues = error ? Object.values(error).flat() : ''
  console.log(errorsValues)

  return (
    <section style={{ background: theme.background }} className={cls.login}>
      <div className={cls.container}>
        <div>
          <h2>
            <NavLink
              style={{ color: theme.text }}
              to='/login'
              exact
              className={cls.active}
            >
              Login
            </NavLink>{' '}
            |{' '}
            <NavLink to='/registration' exact>
              Registration
            </NavLink>
          </h2>
        </div>
        <div className={cls.form}>
          <Input
            type={'email'}
            id={'email'}
            text={'Email'}
            onChange={onChangeEmail}
            error={errors.email}
          />
          <Input
            type={'password'}
            id={'password'}
            text={'Password'}
            onChange={onChangePassword}
            error={errors.password}
          />
          <div className={cls.btnLogin}>
            <p>{errorsValues}</p>
            <Button text={'Login'} onClick={onClick}/>
          </div>
        </div>
        <div className={cls.resetPassword}>
          <p style={{ color: theme.greyText }}>Forgot your password?</p>
          <button style={{ color: theme.text }}>Reset password</button>
        </div>
        <div className={cls.backImg}>
          <img src={theme.bgImage} alt='img' />
        </div>
      </div>
    </section>
  )
}
