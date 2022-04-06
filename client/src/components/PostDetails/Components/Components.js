import React from 'react'
import Component from './Component/Component'
import {useState} from 'react'
import styles from './Components.module.css'

const Components = (props) => {
    //const [comps, setComps] = useState(props.comps);

    const handleAddComp = (e) => {
        e.preventDefault()
        addComp()
    }

    const addComp = () => {
        const newComp = {
            id: props.comps.length,
            name: "",
            quantity: 1,
            key: new Date().getTime()
        }
    //    setComps([
    //        ...props.comps,
    //        newComp
    //    ])
        props.setComps([
            ...props.comps,
            newComp
        ])
    }
    const removeComp = (key) => {
        let newComps = props.comps.filter((item) => item.key !== key);
        for (let i = 0; i < newComps.length; i++){
            newComps[i].id = i;
        }
    //    setComps([...newComps])
        props.setComps([...newComps])
    }

    const setComp = (index, comp) => {
        let newComps = props.comps
        if (index > -1 && index < newComps.length) {
            newComps[index] = comp;
        }
    //    setComps([...newComps])
        props.setComps([...newComps])
    }

    return(
        <div className={styles.components}>
        <button onClick={(e) => handleAddComp(e)}>add comp</button>

        {props.comps.map(el =>
            <Component key={el.key}
            comp={el}
            removeFn={() => removeComp(el.key)}
            className={styles.taskWrapper}
            setComp={setComp}/>
        )}

        </div>
    )
}

export default Components