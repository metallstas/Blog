import { useContext, useState } from 'react'
import { NavBar } from './NavBar/NavBar'
import cls from './Header.module.css'
import { CSSTransition } from 'react-transition-group'
import { Context, IContext } from '../../App'

export const Header = () => {
  const [isActiveNavBar, setIsActiveNavBar] = useState(false)

  const handlerNavBar = () => {
    setIsActiveNavBar(!isActiveNavBar)
  }

  const { theme }: IContext = useContext(Context)

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
        <NavBar setIsActiveNavBar={setIsActiveNavBar} />
      </CSSTransition>
    </header>
  )
}
