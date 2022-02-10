import { Button } from "../../Button/Button"
import { Input } from "../../Input/Input"
import cls from './FormRegistr.module.css'

export const FormRegistr = () => {

  return (
    <section className={cls.login}>
      <div className={cls.container}>
        <div>
          <h2>
            <span>Login</span> |{' '}
            <span className={cls.spanActive}>Registration</span>
          </h2>
        </div>
      <form className={cls.form}>
        <label htmlFor='name'>Name</label>
        <Input type={'text'} id={'name'} />
        <label htmlFor='email'>Email</label>
        <Input type={'email'} id={'email'} />
        <label htmlFor='password'>Password</label>
        <Input type={'password'} id={'password'} />
        <label htmlFor='confirm-password'>Confirm Password</label>
        <Input type={'password'} id={'confirm-password'} />
        <Button text={'Login'} />
      </form>
        <div className={cls.resetPassword}>
          <p>If you have account, you can </p>
          <button>Login</button>
        </div>
        <div className={cls.backImg}>
          <img src='./images/pliama.png' alt='img' />
        </div>
      </div>
    </section>
  )
}
