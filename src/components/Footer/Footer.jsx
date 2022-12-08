import React from 'react'
import Logo from '../../ui/Logo'
import style from './footer.module.css'
const Footer = () => {
  return (
    <div className={style.footer}>
        <div className={style.footerItem}>
            <div className={style.footerItemTitle}>
                <div className={style.footerLogo}>
                    <Logo/>
                </div>
                <div className={style.footerTitle}>
                Copyright 2021. Antools
                </div>
                <div className={style.footerText}>
                Antool is a web collection of information on paid or free Design and Development tools
                </div>
            </div>
            <div className={style.footerItemTitle}>
                <div className={style.footerTitle}>Contact Us</div>
                <div className={style.footerText}>+621987463</div>
                <div className={style.footerText}>M Building, No.10 A</div>
                <div className={style.footerText}>antools@awesome.com</div>
            </div>
            <div className={style.footerItemTitle}>
                <div className={style.footerTitle}>Categories</div>
                <div className={style.footerText}>Design</div>
                <div className={style.footerText}>Development</div>
            </div>
            <div className={style.footerItemTitle}>
                <div className={style.footerTitle}>Company Info</div>
                <div className={style.footerText}>About Us</div>
                <div className={style.footerText}>Our Partners</div>
                <div className={style.footerText}>Blog</div>
            </div>
        </div>
    </div>
  )
}

export default Footer