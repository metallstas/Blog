import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { IState } from '../../redux/store'
import { Button } from '../Button/Button'
import cls from './ConfirmEmail.module.css'

export const ConfirmEmail = () => {
  const email = useSelector((state: IState) => state.authReducer.email)
  console.log(email)
  return (
    <div className={cls.container}>
      <div>
        <h1>Registration Confirmation</h1>
        <p>
          Please activate your account with the activation link in the{' '}
          <span>{email ? email : 'email'}.</span> Please, check your email
        </p>
      </div>
      <NavLink to='/'>
        <Button text='Home' />
      </NavLink>
    </div>
  )
}
