import React from 'react'
import styles from './Task.module.css'
import {useState, useEffect} from 'react'

let minGap = 1;

const Task = (props) => {
    const time = parseInt(props.time)
    const timeStart = parseInt(props.task.timeStart)
    const timeEnd = parseInt(props.task.timeEnd)

    const [width, setWidth] = useState(timeEnd-timeStart)
    const [middle, setMiddle] = useState(timeStart + width/2)



    const getBackgroundSize = () => {
        return {
            left: `${(timeStart * 100) / time}%`, 
            right: `${time - (timeEnd * 100) / time}%`,
            width: `${width * 100 / time}%`
        };
    };

    const createRuler = () => {
        var lines = [];
        var className = styles.line1;
        for(let i = 0; i <= props.time; i++){
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
            <div className={styles.side}>
            <button>X</button>
            <input type="text" className={styles.taskName}
            value={props.task.name}/>
            </div>
        <div className={styles.track}>

            {createRuler()}

            <div className={styles.rangeTrack}>
                <div className={styles.rangeFill}
                    style={getBackgroundSize()}>
                        <div className={styles.rangeThumb}></div>
                </div>
            </div>
            <input type="range" min="0" max={time}
                disabled={false}
                value={middle} 
                className={styles.slider}
                id={styles.range}/>
            <input type="range" min="0" max={time}
                disabled={false}
                value={props.task.timeStart}
                className={styles.slider}
                id={styles.slider1}/>
            <input type="range" min="0" max={time}
                disabled={false}
                value={props.task.timeEnd}
                className={styles.slider}
                id={styles.slider2}/>
        </div>
        </div>
    )
}

export default Task