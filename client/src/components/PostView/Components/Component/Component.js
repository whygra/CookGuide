import React from 'react'
import styles from './Component.module.css'
import {useState} from 'react'

const Component = ({comp}) => {
    
    return(
        <div className={styles.component}>
            <div className={styles.contents}>
                <div className={styles.nameContainer}>
                    <div className={styles.compName}>{comp.title}</div>
                    <hr className={styles.line}/>
                </div>

                <div className={styles.compQuant}>
                    <div className={styles.quantValue}>{comp.quantity}</div>
                    <small className={styles.quantUnit}>{comp.unit}</small>
                </div>
            </div>

        </div>
    )
}

export default Component