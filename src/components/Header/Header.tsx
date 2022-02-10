import { useState } from 'react'
import { NavBar } from './NavBar/NavBar'
import cls from './Header.module.css'
import { CSSTransition } from 'react-transition-group'

export const Header = () => {
  const [isActiveNavBar, setIsActiveNavBar] = useState(false)
  
  const handlerNavBar = () => {
    setIsActiveNavBar(!isActiveNavBar)
  }

  return (
    <>
      <header className={cls.container}>
        <div className={cls.header}>
          <button onClick={handlerNavBar}>
            <img src='/images/Menu.png' alt='menu' />
          </button>
          <div className={cls.userName}>
            <img src='/images/ico.png' alt='user' />
            <p>Username</p>
          </div>
        </div>
      </header>
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
    </>
  )
}
