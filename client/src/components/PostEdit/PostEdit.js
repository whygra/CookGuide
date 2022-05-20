import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './PostEdit.module.css'
import { useSearchParams } from 'react-router-dom';

import Chart from './Chart/Chart'
import Components from './Components/Components'
import { setEditable, setTitle, setImg } from 'actions/editablePost'

const PostEdit = (props) => {

    const [searchParams, setPostId] = useSearchParams()
    const postId = searchParams.get("post");
    
    const dispatch = useDispatch()
    // set redux state
    useEffect(()=> {
        dispatch(setEditable(postId))
    }, [])

    const post = useSelector((state) => state.editablePost)
    console.log(post)

    const handleTitleChange = (e) => {
        e.preventDefault()
        dispatch(setTitle(e.target.value))
    }

    const handleImageChange = (e) => {
        e.preventDefault()
    
        let reader = new FileReader()
        let file = e.target.files[0]
        reader.readAsDataURL(file)

        reader.onloadend = () => {
            dispatch(setImg(reader.result))
        }
    }
    if (Object.keys(post).length == 0){
        return(<h1>Loading...</h1>)
    }
    return(
        <>
        <input
        type="text" value={post.title} className={styles.title}
        onChange={handleTitleChange}/>
        
        <div className="imageInput">
            <input type="file" onChange={handleImageChange}/>
        </div>
        <img className={styles.image} src={post.img}/>
        <div className={styles.postBody}>
        <Components/>
        <Chart/>
        </div>
        </>
    )
}

export default PostEdit