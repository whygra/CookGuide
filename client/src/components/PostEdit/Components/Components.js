import React from 'react'
import Component from './Component/Component'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setComps } from 'actions/editablePost'
import styles from './Components.module.css'

const Components = () => {

    const dispatch = useDispatch()

    const comps = useSelector((state) => state.editablePost).comps
    console.log(comps)

    const handleAddComp = (e) => {
        e.preventDefault()
        addComp()
    }

    const addComp = () => {
        const newComp = {
            id: comps.length,
            name: "",
            quantity: 1,
            key: new Date().getTime()
        }

        dispatch(setComps([
            ...comps,
            newComp
        ]))
    }

    return(
        <div className={styles.components}>
        <button onClick={(e) => handleAddComp(e)}>add comp</button>

        {comps.map(el =>
            <Component key={el.key}
            comp={el}
            className={styles.taskWrapper}/>
        )}

        </div>
    )
}

export default Components