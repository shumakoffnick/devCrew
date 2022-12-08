import React from 'react'
import style from './ui.module.css'
import {AiFillHeart, AiFillFolderAdd} from 'react-icons/ai'

const Card = ({dat, setDat}) => {
    const handleHeart = (id)=>{
        const copy = [...dat];
        const current = copy.find((item)=> item.id === id);
        current.state = !current.state 
        setDat(copy)
        console.log(dat)
    }
    
  return (
    <>
    <div className={style.card}>
        {dat.map((item)=><div key={item.id} className={style.cardItem}>
        <div className={style.cardInfoBlock}>
        <div>{item.img}</div>
        <div className={style.cardTitleBlock}>
        <div className={style.cardTitle}>{item.title}</div>
        <div className={style.cardSubtitle}>{item.subtitle}</div>        
        </div>
        </div>
        <div className={style.cardText}>{item.text}</div>
        <div className={style.cardBottomBlock}>
            <div className={style.cardBottomBlockIcon}>
                {item.state ? <AiFillHeart onClick={()=>handleHeart(item.id)} className={style.cardHeartIconRed}/> : <AiFillHeart onClick={()=>handleHeart(item.id)} className={style.cardHeartIcon}/>}
                
                <AiFillFolderAdd/>
            </div>
            <div className={style.cardBottomBlockText}>
                <button className={style.cardBtnVisit}>
                Visit
                </button>
            </div>
        </div>
        </div>)}
    </div>
    </>
  )
}

export default Card