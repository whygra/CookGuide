import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Component from './Component/Component'
import styles from './Group.module.css'

const Group = ({group}) => {
    const [fold, setFold] = useState(false)
    const toggleFold = () => {
        setFold(fold === false ? true : false)
    }

    const foldHandler = (e) => {
        e.preventDefault()
        toggleFold()
    }

    return(
        <div className={styles.components}>
        <div className={styles.groupHeader}>
            <button onClick={foldHandler} className={styles.foldBtn}>
                <div className={styles.btnIco}>{fold ? ">" : "▼"}</div>
            </button>
            <h3 className={styles.title}>{group.title}</h3>
        </div>
        <div className={styles.hr}></div>
        { !fold &&
        <div className={styles.compsWrapper}>
            {group.comps.map(el =>
                <Component key={el._id}
                comp={el}
                className={styles.taskWrapper}/>
            )}
        </div>
        }

        </div>
    )
}

export default Group