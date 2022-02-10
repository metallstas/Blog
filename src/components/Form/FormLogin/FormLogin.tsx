import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'
import cls from './FormLogin.module.css'

export const FormLogin = () => {

  return (
    <section className={cls.login}>
      <div className={cls.container}>
        <div>
          <h2>
            <span className={cls.spanActive}>Login</span> |{' '}
            <span>Registration</span>
          </h2>
        </div>
        <form className={cls.form}>
          <label htmlFor='email'>Email</label>
          <Input type={'email'} id={'email'} />
          <label htmlFor='password'>Password</label>
          <Input type={'password'} id={'password'} />
          <Button text={'Login'} />
        </form>
        <div className={cls.resetPassword}>
          <p>Forgot your password?</p>
          <button>Reset password</button>
        </div>
        <div className={cls.backImg}>
          <img src='./images/pliama.png' alt='img' />
        </div>
      </div>
    </section>
  )
}
