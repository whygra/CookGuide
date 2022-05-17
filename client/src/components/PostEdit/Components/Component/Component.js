import React from 'react'
import styles from './Component.module.css'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'


const Component = (props) => {

    const nameChange = (e) => {
        let newComp = props.comp
        newComp.name = e.target.value
        props.setComp(props.comp.id, newComp)
    }

    const quantChange = (e) => {
        let newComp = props.comp
        newComp.quantity = e.target.value
        props.setComp(props.comp.id, newComp)
    }

    return(
        <div className={styles.component}>
            <button className={styles.rmvBtn} onClick={props.removeFn}>X</button>
            <div className={styles.contents}>
            <input type="text" className={styles.compName}
            value={props.comp.name} onChange={nameChange}/>
            <input type="number" className={styles.compQuant}
            value={props.comp.quantity} onChange={quantChange}/>
            </div>
        </div>
    )
}

export default Component