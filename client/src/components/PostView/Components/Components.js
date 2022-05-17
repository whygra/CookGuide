import React from 'react'
import Component from './Component/Component'
import {useState} from 'react'
import styles from './Components.module.css'

const Components = (props) => {

    return(
        <div className={styles.components}>

        {props.comps.map(el =>
            <Component key={el.key}
            comp={el}
            className={styles.taskWrapper}/>
        )}

        </div>
    )
}

export default Components