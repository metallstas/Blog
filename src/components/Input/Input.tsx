import cls from './Input.module.css'

interface IInput {
  id: string
  type: string
}

export const Input = ({id, type}: IInput) => {
  return (
    <input id={id} type={type} className={cls.input}/>
  )
}
