import React from 'react'
import styles from './Component.module.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setComps } from 'actions/editablePost'


const Component = ({comp}) => {
    const dispatch = useDispatch()

    const comps = useSelector((state) => state.editablePost).comps

    const handleRmvComp = (e) => {
        e.preventDefault()
        removeComp()
    }

    const removeComp = () => {
        let newComps = comps
        for (let g=0; g<newComps.length; g++){ // for each group
            newComps[g].comps = newComps[g].comps.filter((item) => item.key !== comp.key)
        }
        dispatch(setComps([...newComps]))
    }

    const setComp = (comp) => {
        let newComps = comps
        for (let g=0; g<newComps.length; g++){
            for(let c=0; c<newComps[g].comps.length; c++){
                if (newComps[g].comps[c].key === comp.key){
                    newComps[g].comps[c] = comp
                }
            }
        }
        dispatch(setComps([...newComps]))
    }

    const titleChange = (e) => {
        let newComp = comp
        newComp.title = e.target.value
        setComp(newComp)
    }

    const quantChange = (e) => {
        let newComp = comp
        newComp.quantity = e.target.value
        setComp(newComp)
    }

    const unitChange = (e) => {
        let newComp = comp
        newComp.unit = e.target.value
        setComp(newComp)
    }

    return(
        <div className={styles.component}>
            <button className={styles.rmvBtn} onClick={handleRmvComp}>X</button>
            <div className={styles.contents}>
            <input type="text" className={styles.compName}
            value={comp.title} onChange={titleChange}/>
            <input type="number" className={styles.compQuant}
            value={comp.quantity} min={1} onChange={quantChange}/>
            </div>
            <select value={comp.unit} className={styles.select} onChange={unitChange}>
                <option>g</option>
                <option>piece</option>
                <option>t-sp</option>
                <option>tb-sp</option>
            </select>
        </div>
    )
}

export default Component