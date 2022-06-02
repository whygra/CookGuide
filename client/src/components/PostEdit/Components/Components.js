import React from 'react'
import Group from './Group'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setComps } from 'actions/editablePost'
import styles from './Components.module.css'

const Components = () => {

    const dispatch = useDispatch()

    const comps = useSelector((state) => state.editablePost).comps

    const handleAddGroup = (e) => {
        e.preventDefault()
        addGroup()
    }

    const addGroup = () => {
        const newGroup = {
            title: "",
            comps: [{
                title: "",
                quantity: 1,
                unit: "g",
                key: Date.now()
            }],
            key: Date.now()
        }

        dispatch(setComps([
            ...comps,
            newGroup
        ]))
    }

    return(
        <div className={styles.components}>
        <button onClick={(e) => handleAddGroup(e)}>add group</button>

        {comps.map(el =>
            <Group key={el.key}
            group={el}
            className={styles.taskWrapper}/>
        )}

        </div>
    )
}

export default Components