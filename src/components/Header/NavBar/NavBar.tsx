import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from '../../../App'
import cls from './NavBar.module.css'

interface INavBar {
  setIsActiveNavBar: (active: boolean) => void
}

export const NavBar = ({ setIsActiveNavBar}: INavBar) => {

  const hendleActiveNavBar = () => {
    setIsActiveNavBar(false)
  }

  const {changeIsDark} = useContext(Context)

  return (
    <nav className={cls.navBar}>
      <div className={cls.container}>
        <div className={cls.closeMenuWrap}>
          <button onClick={hendleActiveNavBar}>
            <img src={'/images/CloseMenu.png'} alt='close menu' />
          </button>
        </div>
        <div className={cls.listLinkWrap}>
          <ul className={cls.listLink}>
            <li>
              <NavLink
                className={cls.link}
                activeClassName={cls.activLink}
                exact
                to='/'
                onClick={hendleActiveNavBar}
              >
                All Posts
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName={cls.activLink}
                className={cls.link}
                exact
                to='/login'
                onClick={hendleActiveNavBar}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName={cls.activLink}
                className={cls.link}
                exact
                to='/registration'
                onClick={hendleActiveNavBar}
              >
                Registration
              </NavLink>
            </li>
          </ul>
          <div className={cls.activeNight}>
            <button onClick={changeIsDark}>
              <img src='/images/moon.png' alt='img' />
            </button>
          </div>
        </div>
      </div>
    </nav> 
  )
}
