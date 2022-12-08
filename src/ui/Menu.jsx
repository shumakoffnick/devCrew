import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './ui.module.css'
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'
const Menu = ({state}) => {
    const [arrow, setArrow] = useState(false)
  return (
    <div className={state ? style.menuBlock : style.menu}>
        <div className={style.menuLinkBlock}>
        <Link className={style.menuLink}>Home</Link>
        </div>
        <div onClick={()=>setArrow(!arrow)} className={style.menuLinkBlock}>
        <Link className={style.menuLink}>Categories</Link>
        {arrow ? <MdKeyboardArrowUp className={style.reactIcons}/> : <MdKeyboardArrowDown className={style.reactIcons}/>}
        </div>
        <div className={style.menuLinkBlock}>
        <Link className={style.menuLink}>My Collections</Link>
        </div>
        <div className={style.menuLinkBlock}>
        <Link className={style.menuLink}>Blog</Link>
        </div>
    </div>
  )
}

export default Menu