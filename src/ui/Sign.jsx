import React from 'react'
import style from './ui.module.css'
const Sign = () => {
  return (
    <div className={style.sign}>
        <button className={style.signBtn}>Login</button>
        <button className={style.signBtn}>Sign Up</button>
    </div>
  )
}

export default Sign