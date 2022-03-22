import React from 'react'
import styles from './Component.module.css'
import {useState} from 'react'

const Component = (props) => {
    const [name, setName] = useState(props.name)
    const [quantity, setQuantity] = useState(parseInt(props.quantity))

    const nameChange = (e) => {
        setName(e.target.value)
    }

    const quantChange = (e) => {
        setQuantity(e.target.value)
    }

    const log = () => {
        console.log(name)
    }

    return(
        <div className={styles.component}>
            <button className={styles.rmvBtn} onClick={props.removeFn}>X</button>
            <div className={styles.contents}>
            <input type="text" className={styles.compName}
            value={name} onChange={nameChange}/>
            <input type="number" className={styles.compQuant}
            value={quantity} onChange={quantChange}/>
            </div>
        </div>
    )
}

export default Component