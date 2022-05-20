import React from 'react'
import styles from './Component.module.css'
import {useState} from 'react'

const Component = (props) => {

    return(
        <div className={styles.component}>
            <div className={styles.contents}>
            <input type="text" className={styles.compName}
            value={props.comp.name}/>
            <input type="number" className={styles.compQuant}
            value={props.comp.quantity}/>
            </div>
        </div>
    )
}

export default Component