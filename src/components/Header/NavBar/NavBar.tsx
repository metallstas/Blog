import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setIsActiveNavBar } from '../../../redux/actions/headerAction'
import { changeIsDark } from '../../../redux/actions/themeAction'
import { IState } from '../../../redux/store'
import cls from './NavBar.module.css'


export const NavBar = () => {

  const isDark = useSelector((state: IState) => state.themeReducer.isDark)
  const dispatch = useDispatch()

  const hendleActiveNavBar = () => {
    dispatch(setIsActiveNavBar(false))
  }

  const changeTheme = () => {
    dispatch(changeIsDark())
    dispatch(setIsActiveNavBar(false)) 
  }

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
          <div className={isDark ? `${cls.activeNight} ${cls.rigth}`: `${cls.activeNight}`}>
            <button onClick={changeTheme}>
              <img src='/images/moon.png' alt='img' />
            </button>
          </div>
        </div>
      </div>
    </nav> 
  )
}
