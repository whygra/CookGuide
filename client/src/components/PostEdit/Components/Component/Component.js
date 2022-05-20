import React from 'react'
import styles from './Component.module.css'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setComps } from 'actions/editablePost'


const Component = ({comp}) => {

    const dispatch = useDispatch()

    const comps = useSelector((state) => state.editablePost).comps

    const removeComp = () => {
        let newComps = comps.filter((item) => item.key !== comp.key);
        for (let i = 0; i < newComps.length; i++){
            newComps[i].id = i;
        }
        dispatch(setComps([...newComps]))
    }

    const setComp = (index, comp) => {
        let newComps = comps
        if (index >= 0 && index < newComps.length) {
            newComps[index] = comp;
        }
        dispatch(setComps([...newComps]))
    }

    const nameChange = (e) => {
        let newComp = comp
        newComp.name = e.target.value
        setComp(comp.id, newComp)
    }

    const quantChange = (e) => {
        let newComp = comp
        newComp.quantity = e.target.value
        setComp(comp.id, newComp)
    }

    return(
        <div className={styles.component}>
            <button className={styles.rmvBtn} onClick={removeComp}>X</button>
            <div className={styles.contents}>
            <input type="text" className={styles.compName}
            value={comp.name} onChange={nameChange}/>
            <input type="number" className={styles.compQuant}
            value={comp.quantity} onChange={quantChange}/>
            </div>
        </div>
    )
}

export default Component