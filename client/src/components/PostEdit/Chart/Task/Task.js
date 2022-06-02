import React from 'react'
import styles from './Task.module.css'
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setTasks } from 'actions/editablePost'


const minGap = 1;

const Task = ({task}) => {

    const dispatch = useDispatch()

    const tasks = useSelector((state) => state.editablePost.tasks)

    const time = parseInt(useSelector((state) => state.editablePost.time))
    const timeStart = parseInt(task.timeStart)
    const timeEnd = parseInt(task.timeEnd)

    const [width, setWidth] = useState(timeEnd-timeStart)
    const [middle, setMiddle] = useState(timeStart + width/2)

    const removeTask = () => {
        let newTasks = tasks.filter((item) => item.key !== task.key);
        for (let i = 0; i < newTasks.length; i++){
            newTasks[i].id = i;
        }
        dispatch(setTasks(newTasks))
    }

    const setTask = (index, task) => {
        let newTasks = tasks
        if(index > -1 && index < newTasks.length){
            newTasks[index] = task
        }
        dispatch(setTasks(newTasks))

    }

    const titleChange = (e) => {
        let newTask = task
        newTask.title = e.target.value
        setTask(task.id, newTask)
    }
    const setStart = (start) => {
        start = parseInt(start)
        if (start < 0) { start = 0 }
        let newTask = task
        newTask.timeStart = start
        setTask(task.id, newTask)
    }
    const setEnd = (end) => {
        end = parseInt(end)
        if (end <= 0) { end = 1 }
        let newTask = task
        newTask.timeEnd = end
        setTask(task.id, newTask)
    }

    function slideOne(value){
        setStart(value)
        setWidth(timeEnd-value)
        setMiddle(Math.floor((value + task.timeEnd)/2))
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
        } else if (end > time){
            slideRange(value - (end - time))
        } else {
            setStart(start)
            setEnd(end)
            setMiddle(middle)
        }
    }

    const getBackgroundSize = () => {
        return {
            left: `${(timeStart * 100) / time}%`, 
            right: `${time - (timeEnd * 100) / time}%`,
            width: `${(timeEnd - timeStart) * 100 / time}%`
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
            <div className={styles.side}>
            <button onClick={removeTask}>X</button>
            <input type="text" className={styles.taskName}
            value={task.title} onChange={titleChange}/>
            </div>
        <div className={styles.track}>

            {createRuler()}
            {useEffect(() => {
                if (timeEnd > time){
                    slideTwo(time);
                }
                if (timeStart >= timeEnd) {
                    slideOne(timeEnd-1);
                }
            }, [timeStart, timeEnd, time])}
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
                id={styles.range}
                onChange={handleRange}/>
            <input type="range" min="0" max={time}
                disabled={false}
                value={task.timeStart}
                className={styles.slider}
                id={styles.slider1}
                onChange={handleSlideOne}/>
            <input type="range" min="0" max={time}
                disabled={false}
                value={task.timeEnd}
                className={styles.slider}
                id={styles.slider2}
                onChange={handleSlideTwo}/>
        </div>
        </div>
    )
}

export default Task