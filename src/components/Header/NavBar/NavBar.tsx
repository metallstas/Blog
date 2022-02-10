import { NavLink } from 'react-router-dom'
import cls from './NavBar.module.css'

interface INavBar {
  setIsActiveNavBar: (active: boolean) => void
}

export const NavBar = ({ setIsActiveNavBar}: INavBar) => {

  return (
    <nav className={cls.navBar}>
      <div className={cls.container}>
        <div className={cls.closeMenuWrap}>
          <button onClick={() => setIsActiveNavBar(false)}>
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
              >
                Registration
              </NavLink>
            </li>
          </ul>
          <div className={cls.activeNight}>
            <button>
              <img src='/images/moon.png' alt='img' />
            </button>
          </div>
        </div>
      </div>
    </nav> 
  )
}
