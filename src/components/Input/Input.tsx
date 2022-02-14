import { ChangeEvent } from 'react'
import cls from './Input.module.css'

interface IInput {
  id: string
  type: string
  text: string
  onChange: (text: string) => void
}

export const Input = ({id, type, text,onChange}: IInput) => {
 

  return (
    <>
      <label htmlFor={id}>{text}</label>
      <input id={id} type={type} className={cls.input} onChange={e => onChange(e.target.value)}/>
    </>
  )
}
