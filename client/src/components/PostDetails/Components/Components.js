import React from 'react'
import Component from './Component/Component'
import {useState} from 'react'
import styles from './Components.module.css'

const initComponents = [
    {id: 0, name: "comp", quantity: 1, key: "init0"},
    {id: 1, name: "comp", quantity: 1, key: "init1"},
]

const Components = (props) => {
    const [comps, setComps] = useState(props.comps);

    const addComp = () => {
        const newComp = {
            id: comps.length,
            name: "",
            quantity: 1,
            key: new Date().getTime()
        }
        setComps([
            ...comps,
            newComp
        ])
    }
    const removeComp = (key) => {
        let newComps = comps.filter((item) => item.key !== key);
        for (let i = 0; i < newComps.length; i++){
            newComps[i].id = i;
        }
        setComps([...newComps])
    }

    return(
        <div className={styles.components}>
        {comps.map(el =>
            <Component key={el.key}
            name={el.name} quantity={el.quantity}
            removeFn={() => removeComp(el.key)}
            className={styles.taskWrapper}/>
        )}
        <button onClick={addComp}>add comp</button>

        </div>
    )
}

export default Components