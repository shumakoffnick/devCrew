import React, { useState } from 'react'
import style from './popularTools.module.css'
import Card from '../../ui/Card'
import {newComerData} from '../../CardData'
import { carddata } from '../../CardData'
const PopularTools = () => {
    const [state, setState] = useState(carddata)
    const addNew = ()=>{
        setState([...state, ...newComerData])
    }
  return (
    <div className={style.popularTools}>
        <div className={style.popularTitle}>Most Popular Tools</div>
        <div className={style.populatText}>Tools for the best Designers and Developers most popularly used in the world</div>
        <Card dat={state} setDat={setState}/>
        <button className={style.cardBtnLoad} onClick={()=>addNew()}>Load more</button>
    </div>
  )
}

export default PopularTools