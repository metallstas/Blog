import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { register } from '../../../redux/actions/authAction'
import { IState } from '../../../redux/store'
import { validationService } from '../../../services/validation'
import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'
import cls from './FormRegister.module.css'

export const FormRegister = () => {
  const theme = useSelector((state: IState) => state.themeReducer.currentTheme)
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const dispatch = useDispatch()
  const error = useSelector((state: IState) => state.authReducer.error)
  const emailState = useSelector((state: IState) => state.authReducer.email)
  const history = useHistory()

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  useEffect(() => {
    if (emailState) {
      history.push('/confirm')
    }
  }, [emailState])

  const onChangeUserName = useCallback((text) => {
    setUsername(text)
  }, [])

  const onChangeEmail = useCallback((text) => {
    setEmail(text)
  }, [])

  const onChangePassword = useCallback((text) => {
    setPassword(text)
  }, [])

  const onChangeConfirmPassword = useCallback((text) => {
    setConfirmPassword(text)
  }, [])

  const onClick = () => {
    const errors = {
      username: validationService.validateName(username),
      email: validationService.validateEmail(email),
      password: validationService.validatePassword(password),
      confirmPassword: validationService.validateRepeatedPassword(
        password,
        confirmPassword
      ),
    }
    setErrors(errors)

    // const keys = Object.keys(errors)
    const values = Object.values(errors)
    const isValid = values.every((value) => value === '')
    // const entries = Object.entries(errors)
    if (isValid) {
      dispatch(register({ username, email, password }))
    }
  }
  const errorsValues = error ? Object.values(error).flat() : ''
  console.log(errorsValues)

  return (
    <section style={{ background: theme.background }} className={cls.login}>
      <div className={cls.container}>
        <div>
          <h2>
            <NavLink to='/login' exact>
              Login
            </NavLink>{' '}
            |{' '}
            <NavLink
              style={{ color: theme.text }}
              to='/registration'
              exact
              className={cls.active}
            >
              Registration
            </NavLink>
          </h2>
        </div>
        <div className={cls.form}>
          <Input
            type={'text'}
            id={'name'}
            text={'Name'}
            onChange={onChangeUserName}
            error={errors.username}
          />
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
          <Input
            type={'password'}
            id={'confirm-password'}
            text={'Confirm Password'}
            onChange={onChangeConfirmPassword}
            error={errors.confirmPassword}
          />
          <div className={cls.btnLogin}>
            <p>{errorsValues}</p>
            <Button onClick={onClick} text={'Registration'} />
          </div>
        </div>
        <div className={cls.resetPassword}>
          <p style={{ color: theme.greyText }}>If you have account, you can </p>
          <NavLink to='/login' style={{ color: theme.text }}>
            Login
          </NavLink>
        </div>
        <div className={cls.backImg}>
          <img src={theme.bgImage} alt='img' />
        </div>
      </div>
    </section>
  )
}
