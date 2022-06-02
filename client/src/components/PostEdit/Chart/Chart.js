import React from 'react'
import Task from './Task/Task'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setTasks, setTime } from 'actions/editablePost'
import styles from './Chart.module.css'


const Chart = (props) => {

    const dispatch = useDispatch()

    const time = useSelector((state) => state.editablePost).time
    const tasks = useSelector((state) => state.editablePost).tasks

    const handleAddTask = (e) => {
        e.preventDefault()
        addTask()
    }

    const handleTimeChange = (e) => {
        dispatch(setTime(e.target.value))
    }

    const addTask = () => {
        const newTask = {
            id: tasks.length,
            title: "",
            timeStart: 0,
            timeEnd: Math.floor(time/4),
            key: new Date().getTime()
        }

        dispatch(setTasks([
            ...tasks,
            newTask
        ]))
    }
    
    const createRuler = () => {
        var lines = [];
        var period = 1;
        var className = styles.scale1;
        for(let i = 0; i <= time; i++){
            var style = {
                color: "black"
            }
            if (i % 60 === 0) {
                className = styles.scale60;
                period = 60;
            } else if (i % 30 === 0) {
                className = styles.scale30;
                period = 30;
            } else if (i % 10 === 0) {
                className = styles.scale10;
                period = 10;
            } else if (i % 5 === 0) {
                className = styles.scale5;
                period = 5;
            } else {
                period = 1;
                className = styles.scale1;
            }
            if(time / period > 20){
                style.color = "transparent"
            }
           
            lines.push(<small key={i} style={style} className={className}>{i}</small>);
        }
        return <div className={styles.ruler}>{lines}</div>;
    }

    return(
        <div className={styles.chart}>
        <button onClick={(e) => handleAddTask(e)}>add task</button>
        <div className={styles.rulerWrapper}>

            <input type="number" min="5" value={time}
            onChange={handleTimeChange}></input>

            <div className={styles.rulerContainer}>
                {createRuler()}
            </div>
        </div>
        {
            tasks.map(el =>
                <Task key={el._id} task={el}/>)
        }
        </div>
    )
}

export default Chart