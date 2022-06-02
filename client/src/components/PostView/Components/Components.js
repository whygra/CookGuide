import React from 'react'
import { useSelector } from 'react-redux'

import Group from './Group'
import styles from './Components.module.css'

const Components = () => {
    const comps = useSelector((state) => state.readablePost).comps
    return(
        <div className={styles.components}>

        {comps.map(el =>
            <Group key={el._id}
            group={el}/>
        )}

        </div>
    )
}

export default Components