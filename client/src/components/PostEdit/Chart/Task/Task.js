import React from 'react'
import styles from './Task.module.css'
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'


let minGap = 1;

const Task = (props) => {
    const length = parseInt(props.length)
    const timeStart = parseInt(props.task.timeStart)
    const timeEnd = parseInt(props.task.timeEnd)

    const [width, setWidth] = useState(timeEnd-timeStart)
    const [middle, setMiddle] = useState(timeStart + width/2)

    const nameChange = (e) => {
        let newTask = props.task
        newTask.name = e.target.value
        props.setTask(props.task.id, newTask)
    }
    const setStart = (start) => {
        start = parseInt(start)
        if (start < 0) { start = 0 }
        let newTask = props.task
        newTask.timeStart = start
        props.setTask(props.task.id, newTask)
    }
    const setEnd = (end) => {
        end = parseInt(end)
        if (end <= 0) { end = 1 }
        let newTask = props.task
        newTask.timeEnd = end
        props.setTask(props.task.id, newTask)
    }

    function slideOne(value){
        setStart(value)
        setWidth(timeEnd-value)
        setMiddle(Math.floor((value + props.task.timeEnd)/2))
    }
    function slideTwo(value){
        setWidth(value-timeStart)                   
        setMiddle(Math.floor((timeStart + value)/2))
        setEnd(value)
    }

    const handleSlideOne = (e) => {
        let value = parseInt(e.target.value)
        if(timeEnd - value <= minGap){
            value = timeEnd - minGap
        }
        slideOne(value)
    }

    const handleSlideTwo = (e) => {
        let value = parseInt(e.target.value)
        if(value - timeStart <= minGap){
            value = timeStart + minGap 
        }
        slideTwo(value)
    }

    const handleRange = (e) => {
        slideRange(e.target.value)
    }

    function slideRange(value){
        const middle = parseInt(value)
        const start = middle - Math.floor(width/2)
        const end = start + width
        if (start < 0){
            slideRange(value - start)
        } else if (end > props.length){
            slideRange(value - (end - props.length))
        } else {
            setStart(start)
            setEnd(end)
            setMiddle(middle)
        }
    }

    const getBackgroundSize = () => {
        return {
            left: `${(timeStart * 100) / length}%`, 
            right: `${length - (timeEnd * 100) / length}%`,
            width: `${width * 100 / length}%`
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
            <div className={styles.side}>
            <button onClick={props.removeFn}>X</button>
            <input type="text" className={styles.taskName}
            value={props.task.name} onChange={nameChange}/>
            </div>
        <div className={styles.track}>

            {createRuler()}
            {useEffect(() => {
                if (timeEnd > length){
                    slideTwo(length);
                }
                if (timeStart >= timeEnd) {
                    slideOne(timeEnd-1);
                }
            }, [timeStart, timeEnd, length])}
            <div className={styles.rangeTrack}>
                <div className={styles.rangeFill}
                    style={getBackgroundSize()}>
                        <div className={styles.rangeThumb}></div>
                </div>
            </div>
            <input type="range" min="0" max={length}
                disabled={false}
                value={middle} 
                className={styles.slider}
                id={styles.range}
                onChange={handleRange}/>
            <input type="range" min="0" max={length}
                disabled={false}
                value={props.task.timeStart}
                className={styles.slider}
                id={styles.slider1}
                onChange={handleSlideOne}/>
            <input type="range" min="0" max={length}
                disabled={false}
                value={props.task.timeEnd}
                className={styles.slider}
                id={styles.slider2}
                onChange={handleSlideTwo}/>
        </div>
        </div>
    )
}

export default Task