import React from 'react'
import Chart from './Chart/Chart'
import Components from './Components/Components'
import {useState} from 'react'
import styles from './PostDetails.module.css'

const PostDetails = (props) => {

    const [title, setTitle] = useState(props.post.title)

    return(
        <div className={styles.postDetails}>
        <input type="text" value={title} className={styles.title}
        onChange={(e) => setTitle(e.target.value)}/>
        <img className={styles.image} src={props.post.img}/>
        <Components comps={props.post.comps}/>
        <Chart length={props.post.length} tasks={props.post.tasks}/>
        </div>
    )
}

export default PostDetails