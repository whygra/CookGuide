import React from 'react'
import Task from './Task/Task'
import {useState} from 'react'
import styles from './Chart.module.css'

let initTasks = [
    {id: 0, name: "qq", timeStart: 0, timeEnd: 15},
    {id: 1, name: "qq", timeStart: 15, timeEnd: 50},
    {id: 2, name: "qq", timeStart: 50, timeEnd: 60},
]

const Chart = (props) => {
    const [length, setLength] = useState(60);
    const [tasks, setTasks] = useState(initTasks);

    function addTask(){
        const newTask = {
            id: tasks.length,
            name: "",
            timeStart: 0,
            timeEnd: Math.floor(length/4)
        }
        setTasks([
            ...tasks,
            newTask
        ])
    }
    function removeTask(id){
        tasks.splice(id, 1)
        for (let i = 0; i < tasks.length; i++){
            tasks[i].id = i;
        }
        setTasks([...tasks])
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
        <div>
        <h1>Chart</h1>
        <div className={styles.rulerWrapper}>
            <input type="number" min="5" value={length}
            onChange={(e)=>setLength(e.target.value)}></input>

            <div className={styles.container}>
                {createRuler()}
            </div>
        </div>
        {
            tasks.map(el =>
            <div key={el.id} className={styles.taskWrapper}>
                <button key={"remove" + el.id}
                onClick={() => removeTask(el.id)}>X</button>

                <Task key={"task" + el.id} name={el.name}
                timeStart={el.timeStart} timeEnd={el.timeEnd}
                length={length}/>
            </div>
            )
        }
        <button onClick={addTask}>add task</button>
        </div>
    )
}

export default Chart