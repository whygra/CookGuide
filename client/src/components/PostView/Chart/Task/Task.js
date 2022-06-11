import React from 'react'
import styles from './Task.module.css'
import {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'

let minGap = 1;

const Task = ({task}) => {

    const time = parseInt(useSelector((state) => state.editablePost).time)
    const timeStart = parseInt(task.timeStart)
    const timeEnd = parseInt(task.timeEnd)

    const [width, setWidth] = useState(timeEnd-timeStart)
    const [middle, setMiddle] = useState(timeStart + width/2)

    const getBackgroundSize = () => {
        return {
            left: `${(timeStart * 100) / time}%`, 
            right: `${time - (timeEnd * 100) / time}%`,
            width: `${(timeEnd-timeStart) * 100 / time}%`
        };
    };

    const createRuler = () => {
        var lines = [];
        var className = styles.line1;
        for(let i = 0; i <= time; i++){
            className = i % 60 === 0 ? styles.line60 :
                        i % 30 === 0 ? styles.line30 :
                        i % 5 === 0 ? styles.line5:
                        styles.line1
            lines.push(<div key={i} className={className}></div>);
        }
        return <div className={styles.ruler}>{lines}</div>;
    }


    return(
        <div className={styles.wrapper}>
            <div type="text" className={styles.title}>
                {task.title}
            </div>
        <div className={styles.track}>

            {createRuler()}

            <div className={styles.rangeTrack}>
                <div className={styles.rangeFill}
                    style={getBackgroundSize()}>
                        <div className={styles.rangeThumb}></div>
                </div>
            </div>
            <input readOnly={true} type="range" min="0" max={time}
                disabled={false}
                value={middle} 
                className={styles.slider}
                id={styles.range}/>
            <input readOnly={true} type="range" min="0" max={time}
                disabled={false}
                value={task.timeStart}
                className={styles.slider}
                id={styles.slider1}/>
            <input readOnly={true} type="range" min="0" max={time}
                disabled={false}
                value={task.timeEnd}
                className={styles.slider}
                id={styles.slider2}/>
        </div>
        </div>
    )
}

export default Task