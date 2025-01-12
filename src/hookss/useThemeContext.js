import  { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const useThemeContext = () => {
  const themeContext = useContext(ThemeContext)


  if(themeContext === undefined){
    throw new Error('Theme context is undefined')
  }

  return themeContext
}

export default useThemeContext