import React from 'react'
import style from './ui.module.css'
const Logo = () => {
  return (
    <div className={style.logo}>
        <div className={style.logoBox}>
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9645 5.4359C10.632 5.4359 10.3089 5.47693 10 5.55416C10.1988 3.76058 10.9148 2.12398 11.9963 0.794922C16.2971 1.30464 19.6332 4.96455 19.6332 9.40293V15.7294C19.4605 15.7391 19.2864 15.744 19.1112 15.744C15.6706 15.744 12.6709 13.8483 11.1028 11.0423H14.9315V9.40293C14.9315 7.212 13.1554 5.4359 10.9645 5.4359Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.256409 9.95068C0.256409 4.62496 4.57375 0.307617 9.89947 0.307617C12.5623 0.307617 14.9731 1.38695 16.7181 3.132C15.1095 1.52336 12.9351 0.48044 10.519 0.327242C8.89397 2.12575 7.90439 4.50947 7.90439 7.12431C7.90439 7.31936 7.9099 7.51312 7.92076 7.70545C7.299 8.25384 6.9068 9.05646 6.9068 9.95068V10.6157H12.8921L8.52139 10.6158C9.94446 14.4968 13.6719 17.2661 18.0462 17.2661C18.5546 17.2661 19.0542 17.2287 19.5425 17.1565V21.2563H12.8921V17.2661H6.9068V21.2563H0.256409V13.9409V9.95068Z" fill="white"/>
            </svg>
        </div>
        <p className={style.text}>antools.</p>
    </div>
  )
}

export default Logo