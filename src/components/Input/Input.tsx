import { useSelector } from 'react-redux'
import { IState } from '../../redux/store'
import cls from './Input.module.css'

interface IInput {
  id: string
  type: string
  text: string
  onChange: (text: string) => void
  error?: string
}

export const Input = ({id, type, text,onChange, error}: IInput) => {
  const theme = useSelector((state: IState) => state.themeReducer.currentTheme)
  return (
    <>
      <label className={cls.label} style={{color: theme.greyText}} htmlFor={id}>{text}</label>
      <input id={id} type={type} className={`${cls.input} ${error ? cls.error : null}`} onChange={e => onChange(e.target.value)}/>
      {error ? <p className={cls.textError}>{error}</p> : ''}
    </>
  )
}
