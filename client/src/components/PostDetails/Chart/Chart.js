import React from 'react'
import Task from './Task/Task'
import {useState} from 'react'
import styles from './Chart.module.css'


const Chart = (props) => {
    const [length, setLength] = useState(props.length);
    const [tasks, setTasks] = useState(props.tasks);

    const addTask = () => {
        const newTask = {
            id: tasks.length,
            name: "",
            timeStart: 0,
            timeEnd: Math.floor(length/4),
            key: new Date().getTime()
        }
        setTasks([
            ...tasks,
            newTask
        ])
    }
    function removeTask(key){
        let newTasks = tasks.filter((item) => item.key !== key);
        for (let i = 0; i < newTasks.length; i++){
            newTasks[i].id = i;
        }
        setTasks([...newTasks])
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
        <div className={styles.rulerWrapper}>

            <input type="number" min="5" value={length}
            onChange={(e)=>setLength(e.target.value)}></input>

            <div className={styles.rulerContainer}>
                {createRuler()}
            </div>
        </div>
        {
            tasks.map(el =>
                <Task key={el.key} name={el.name}
                timeStart={el.timeStart} timeEnd={el.timeEnd}
                removeFn={() => removeTask(el.key)}
                length={length}/>)
        }
        <button onClick={addTask}>add task</button>
        </div>
    )
}

export default Chart