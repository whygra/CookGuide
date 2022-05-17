import React from 'react'
import Component from './Component/Component'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './Components.module.css'

const Components = (props) => {
    const comps = useSelector((state) => state.editablePost).comps

    const handleAddComp = (e) => {
        e.preventDefault()
        addComp()
    }

    const addComp = () => {
        const newComp = {
            id: props.comps.length,
            name: "",
            quantity: 1,
            key: new Date().getTime()
        }

        props.setComps([
            ...props.comps,
            newComp
        ])
    }
    const removeComp = (key) => {
        let newComps = props.comps.filter((item) => item.key !== key);
        for (let i = 0; i < newComps.length; i++){
            newComps[i].id = i;
        }
        props.setComps([...newComps])
    }

    const setComp = (index, comp) => {
        let newComps = props.comps
        if (index > -1 && index < newComps.length) {
            newComps[index] = comp;
        }
        props.setComps([...newComps])
    }

    return(
        <div className={styles.components}>
        <button hidden={!props.editable} onClick={(e) => handleAddComp(e)}>add comp</button>

        {comps.map(el =>
            <Component key={el.key}
            comp={el}
            removeFn={() => removeComp(el.key)}
            className={styles.taskWrapper}
            setComp={setComp}/>
        )}

        </div>
    )
}

export default Components