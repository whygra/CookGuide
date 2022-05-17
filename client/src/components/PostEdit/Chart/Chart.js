import React from 'react'
import Task from './Task/Task'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './Chart.module.css'


const Chart = (props) => {
    const length = useSelector((state) => state.editablePost).length

    const tasks = useSelector((state) => state.editablePost).tasks

    const handleAddTask = (e) => {
        e.preventDefault()
        addTask()
    }

    const addTask = () => {
        const newTask = {
            id: length,
            name: "",
            timeStart: 0,
            timeEnd: Math.floor(length/4),
            key: new Date().getTime()
        }

        props.setTasks([
            ...props.tasks,
            newTask
        ])
    }
    function removeTask(key){
        let newTasks = props.tasks.filter((item) => item.key !== key);
        for (let i = 0; i < newTasks.length; i++){
            newTasks[i].id = i;
        }
        props.setTasks([...newTasks])
    }

    const setTask = (index, task) => {
        let newTasks = props.tasks
        if(index > -1 && index < newTasks.length){
            newTasks[index] = task
        }
        props.setTasks([...newTasks])
    }

    const createRuler = () => {
        var lines = [];
        var period = 1;
        var className = styles.scale1;
        
        for(let i = 0; i <= length; i++){
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
            if(length / period > 20){
                style.color = "transparent"
            }
           
            lines.push(<small key={i} style={style} className={className}>{i}</small>);
        }
        return <div className={styles.ruler}>{lines}</div>;
    }

    return(
        <div className={styles.chart}>
        <button hidden={!props.editable} onClick={(e) => handleAddTask(e)}>add task</button>
        <div className={styles.rulerWrapper}>

            <input type="number" min="5" value={length}
            onChange={(e)=>props.setLength(e.target.value)}></input>

            <div className={styles.rulerContainer}>
                {createRuler()}
            </div>
        </div>
        {
            tasks.map(el =>
                <Task key={el.key} task={el}
                removeFn={() => removeTask(el.key)}
                setTask={setTask}
                length={length}/>)
        }
        </div>
    )
}

export default Chart