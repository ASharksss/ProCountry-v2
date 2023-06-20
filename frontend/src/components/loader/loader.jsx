import React from 'react'
import style from './loader.module.css'

export const Loader = () => {
    return (
        <div className={style.preloader}>
            <div className={style.preloader__spinner}></div>
        </div>
    )
}