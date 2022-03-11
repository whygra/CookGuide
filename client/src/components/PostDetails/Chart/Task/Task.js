import React from 'react'
import styles from './Task.module.css'
import {useState} from 'react'

let minGap = 1;



const Task = (props) => {

    const [name, setName] = useState(props.name)

    const [timeStart, setStart] = useState(parseInt(props.timeStart))
    const [timeEnd, setEnd] = useState(parseInt(props.timeEnd))
    const [width, setWidth] = useState(timeEnd-timeStart)
    const [middle, setMiddle] = useState(timeStart - -(width)/2)

    // keep values in sliders' range
    if (timeStart >= parseInt(props.length)){
        const start = parseInt(props.length) - 1
        slideOne(start);
        //setWidth(timeEnd-(start));
        //setMiddle(Math.floor((start + timeEnd)/2))
    }
    if (timeEnd > parseInt(props.length)){
        const length = parseInt(props.length)
        slideTwo(length);
        //setWidth(length-timeStart);
        //setMiddle(Math.floor((timeStart + length)/2))
    }

    if (timeStart < 0){ setStart(0)}
    if (timeEnd <= 0){ setEnd(1)}

    function nameChange(e){
        setName(e.target.value)
    }

    function slideOne(e){
        let value = Number.isInteger(e) ?
                    e : parseInt(e.target.value)
        if(timeEnd - value <= minGap){
            value = timeEnd - minGap
        }
        setStart(value)
        setWidth(timeEnd-value)
        setMiddle(Math.floor((value + timeEnd)/2))
    }
    function slideTwo(e){
        
        let value = Number.isInteger(e) ?
                    e : parseInt(e.target.value)
        if(value - timeStart <= minGap){
            value = timeStart + minGap 
        }
        setEnd(value)
        setWidth(value-timeStart)
        setMiddle(Math.floor((timeStart + value)/2))

    }
    function slideRange(e){
        const middle = parseInt(e.target.value)
        const start = middle - Math.floor(width/2)
        const end = start + width
        if(start >= 0 && end <= props.length){
            setStart(start)
            setEnd(end)
            setMiddle(middle)
        }
        
    }

    const getBackgroundSize = () => {
        return {
            left: `${(timeStart * 100) / props.length}%`, 
            right: `${props.length - (timeEnd * 100) / props.length}%`,
            width: `${width * 100 / props.length}%`
        };
    };

    const createRuler = () => {
        var lines = [];
        var className = styles.line1;
        for(let i = 0; i <= props.length; i++){
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
        <input type="text" className={styles.task}
         value={name} onChange={nameChange}/>

        <div className={styles.container}>

            {createRuler()}

            <div className={styles.rangeTrack}>
                <div className={styles.rangeFill}
                    style={getBackgroundSize()}>
                        <div className={styles.rangeThumb}></div>
                </div>
            </div>
            <input type="range" min="0" max={props.length}
                value={middle} 
                className={styles.slider}
                id={styles.range}
                onChange={slideRange}/>
            <input type="range" min="0" max={props.length}
                value={timeStart}
                className={styles.slider}
                id={styles.slider1}
                onChange={slideOne}/>
            <input type="range" min="0" max={props.length}
                value={timeEnd}
                className={styles.slider}
                id={styles.slider2}
                onChange={slideTwo}/>
            
            
        </div>
        </div>
    )
}

export default Task