import React from 'react'
import { useSelector } from 'react-redux'

import Component from './Component/Component'
import styles from './Components.module.css'

const Components = () => {

    const comps = useSelector((state) => state.editablePost).comps

    return(
        <div className={styles.components}>

        {comps.map(el =>
            <Component key={el.key}
            comp={el}
            className={styles.taskWrapper}/>
        )}

        </div>
    )
}

export default Components