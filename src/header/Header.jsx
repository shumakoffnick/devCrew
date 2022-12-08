import React, {useState} from 'react'
import Menu from '../ui/Menu'
import Logo from '../ui/Logo'
import Sign from '../ui/Sign'
import style from './header.module.css'
const Header = () => {
  const [state, setState] = useState(false)
  return (
    <div className={style.header}>
        <Logo/>
        <button className={style.menuButton} onClick={()=>setState(!state)}>Menu</button>
        {state &&
        <div><Menu state={state}/></div>
        }
        <Menu/>
        <Sign/>
    </div>
  )
}

export default Header