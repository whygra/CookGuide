import React from 'react'
import styles from './Component.module.css'
import {useState} from 'react'

const Component = ({comp}) => {
    
    return(
        <div className={styles.component}>
            <div className={styles.contents}>
            <input type="text" className={styles.compName}
            value={comp.title}/>
            <input type="number" className={styles.compQuant}
            value={comp.quantity}/>
            </div>
            <div className="label">{comp.unit}</div>

        </div>
    )
}

export default Component