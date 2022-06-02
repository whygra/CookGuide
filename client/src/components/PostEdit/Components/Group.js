import React from 'react'
import Component from './Component/Component'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setComps } from 'actions/editablePost'
import styles from './Components.module.css'

const Group = ({group}) => {

    const dispatch = useDispatch()

    const comps = useSelector((state) => state.editablePost).comps

    const setGroup = (group) => {
        const newComps = comps
        const ind = newComps.findIndex(g => g.key === group.key)
        newComps[ind] = group
        dispatch(setComps([
            newComps
        ]))
    }

    const setTitle = (value) =>{
        const newGroup = group
        newGroup.title = value
        setGroup(newGroup)
    }

    const handleAddComp = (e) => {
        e.preventDefault()
        addComp()
    }

    const handleRmvComp = (e) => {
        e.preventDefault()
        rmvGroup()
    }

    const addComp = () => {
        const newComp = {
            title: "",
            quantity: 1,
            unit: "g",
            key: Date.now(),
        }

        const newGroup = {
            ...group,
            comps: [
                ...group.comps,
                newComp
            ]
        }

        const newComps = comps
        const ind = newComps.findIndex(g => g.key === newGroup.key)
        newComps[ind] = newGroup

        dispatch(setComps(
            newComps
        ))
    }

    const rmvGroup = () => {
        const newComps = comps.filter(g => g.key !== group.key)

        dispatch(setComps(
            newComps
        ))
    }

    return(
        <div className={styles.components}>
        <button className={styles.rmvBtn} onClick={(e) => handleRmvComp(e)}>X</button>
        <input type="text" value={group.title}
        onChange={(e) => setTitle(e.target.value)}/>
        <button onClick={(e) => handleAddComp(e)}>add comp</button>
        {group.comps.map(el =>
            <Component key={el.key}
            comp={el}
            className={styles.taskWrapper}/>
        )}

        </div>
    )
}

export default Group