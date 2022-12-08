import React from 'react'
import style from './form.module.css'
const Form = () => {
  return (
    <div className={style.form}>
        <div className={style.title}>Become a contributor?</div> 
        <div className={style.formText}>Join us and get tips & tricks to become a great Designer and Developer</div>
        <div className={style.formInp}>
            <input className={style.formInput} placeholder='Enter your email...'/>
            <button className={style.formInpBtn}>Join us</button>
        </div>
    </div>
  )
}

export default Form