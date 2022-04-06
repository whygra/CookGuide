import React, { useEffect } from 'react'
import Chart from './Chart/Chart'
import Components from './Components/Components'

import { useDispatch } from 'react-redux'
import {useState} from 'react'
import styles from './PostDetails.module.css'
import { ImageList } from '@material-ui/core'

import image from 'images/dish01.jpg'


const initTasks = [
    {id: 0, name: "qq", timeStart: 0, timeEnd: 15, key: "init0"},
    {id: 1, name: "qq", timeStart: 15, timeEnd: 50, key: "init1"},
    {id: 2, name: "qq", timeStart: 50, timeEnd: 60, key: "init2"},
]

const initComponents = [
    {id: 0, name: "comp", quantity: 1, key: "init0"},
    {id: 1, name: "comp", quantity: 1, key: "init1"},
]

const initPost = {
    title: "Title", img: image, length: 60,
    comps: initComponents, tasks: initTasks
}

const PostDetails = (props) => {

    const [post, setPost] = useState(initPost)
    const [imageURL, setImageURL] = useState(post.img)

    const handleTitleChange = (e) => {
        e.preventDefault()
    
        setPost({...post, title: e.target.value})
    }

    const handleImageChange = (e) => {
        e.preventDefault()
    
        let reader = new FileReader()
        let file = e.target.files[0]
    
        reader.onloadend = () => {
            setImageURL(reader.result)
        }
    
        reader.readAsDataURL(file)
    }

    const setComps = (comps) => {
        setPost({...post, comps: comps})
    }

    const setTasks = (tasks) => {
        setPost({...post, tasks: tasks})
    }

    const setLength = (length) => {
        setPost({...post, length: length})
    }

    return(
        <div className={styles.postDetails}>
        <form className={styles.form}>
        <fieldset disabled={!props.editable}>
        <input
        type="text" value={post.title} className={styles.title}
        onChange={handleTitleChange}/>
        
        <div className="imageInput" hidden={!props.editable}>
            <input type="file" onChange={handleImageChange}/>
        </div>
        <img className={styles.image} src={imageURL}/>
        <div className={styles.postBody}>
        <Components comps={post.comps} setComps={setComps}/>
        <Chart length={post.length} tasks={post.tasks}
        setLength={setLength} setTasks={setTasks}/>
        </div>
        { props.editable ?
            <button className={styles.submit} type="submit">submit</button> :
            null }
        </fieldset>
        </form>
        </div>
    )
}

export default PostDetails