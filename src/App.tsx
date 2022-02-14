import { createContext, useState } from 'react'
import { RootRouter } from './navigation/RootRouter'

export const Context = createContext({
  isDark: false,
  changeIsDark: () => {},
  theme: {},
})

const darkTheme = {
  text: '#fff',
  background: '#016EFC',
  bgImage: '/images/bg-dark.png',
  greyText: '#254050',
  menuImg: '/images/Menu-dark.png',
  iconImg: '/images/ico-dark.png',
}

const lightTheme = {
  text: '#016EFC',
  background: '#fff',
  bgImage: '/images/bg-light.png',
  greyText: '#fff',
  menuImg: '/images/Menu-light.png',
  iconImg: '/images/ico-light.png',
}

function App() {
  const [isDark, setIsDark] = useState(false)
  console.log(isDark)
  const changeIsDark = () => {
    setIsDark((isDark) => !isDark)
  }

  return (
    <Context.Provider
      value={{
        isDark,
        changeIsDark,
        theme: isDark ? darkTheme : lightTheme,
      }}
    >
      <div className='App'>
        <RootRouter />
      </div>
    </Context.Provider>
  )
}

export default App
