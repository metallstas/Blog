import cls from './Button.module.css'

interface IButton {
  text: string
}

export const Button = ({text}: IButton) => {
  return (
    <button className={cls.button}>
      {text}
    </button>
  )
}
