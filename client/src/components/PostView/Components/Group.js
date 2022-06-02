import React from 'react'
import { useSelector } from 'react-redux'

import Component from './Component/Component'
import styles from './Group.module.css'

const Group = ({group}) => {
    return(
        <div className={styles.components}>
        <h1 className={styles.title}>{group.title}</h1>
        <div className={styles.hr}></div>
        <div className={styles.compsWrapper}>
            {group.comps.map(el =>
                <Component key={el._id}
                comp={el}
                className={styles.taskWrapper}/>
            )}
        </div>


        </div>
    )
}

export default Group