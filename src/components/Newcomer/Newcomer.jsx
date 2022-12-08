import React, { useState } from 'react'
import Card from '../../ui/Card'
import style from './newcomer.module.css'
import {newComerData} from '../../CardData'
const Newcomer = () => {
    const [state, setState] = useState(newComerData)
  return (
    <div className={style.newcomer}>
        <div className={style.newcomerBlock}>
            <div className={style.newcomerInfoBlock}>
                <div className={style.newcomerTitle}>Newcomer Tools</div>
                <div className={style.newcomerText}>Wow! see the latest update of the most recommended tools from reliable designers and developers</div>
                <button className={style.newcomerBtn}>Explore more</button>
            </div>
            <div className={style.newcomerCardBlock}>
                <Card dat={state} setDat={setState}/>
            </div>
        </div>
    </div>
  )
}

export default Newcomer