import { NavBar } from './NavBar/NavBar'
import cls from './Header.module.css'
import { CSSTransition } from 'react-transition-group'
import { useDispatch, useSelector } from 'react-redux'
import { IState } from '../../redux/store'
import { setIsActiveNavBar } from '../../redux/actions/headerAction'

export const Header = () => {
  const theme = useSelector((state: IState) => state.themeReducer.currentTheme)
  const isActiveNavBar = useSelector((state: IState) => state.headerReducer.isActiveNavBar)
  const dispatch = useDispatch()
  
  const handlerNavBar = () => {
    dispatch(setIsActiveNavBar(true))
  }

  const darkTheme = {
    background: theme.background,
    color: theme.text
  }

  return (
    <header style={darkTheme}>
      <div className={cls.container}>
        <div className={cls.header}>
          <button style={{background: theme.background}} onClick={handlerNavBar}>
            <img src={theme.menuImg} alt='menu' />
          </button>
          <div className={cls.userName}>
            <img src={theme.iconImg} alt='user' />
            <p style={{color: theme.text}}>Username</p>
          </div>
        </div>
      </div>
      <CSSTransition
        in={isActiveNavBar}
        timeout={500}
        mountOnEnter
        unmountOnExit
        classNames={{
          enterActive: cls.navBarEnter,
          exitActive: cls.navBarExit,
        }}
      >
        <NavBar />
      </CSSTransition>
    </header>
  )
}
