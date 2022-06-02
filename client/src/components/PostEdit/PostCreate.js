import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './PostEdit.module.css'
import { useNavigate } from 'react-router-dom';

import PostEdit from './PostEdit'
import { createPost } from 'actions/posts'
import { resetEditable } from 'actions/editablePost'

const PostCreate = () => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(resetEditable())
    }, [])

    const post = useSelector((state) => state.editablePost)
    console.log(post)
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createPost(post))
        navigate(`/`)
    }

    return(
        <div className={styles.postDetails}>
        
        <form className={styles.form}>
        <fieldset>

        <PostEdit />

        <button className={styles.submit} onClick={handleSubmit}>submit</button>

        </fieldset>
        </form>
        </div>
    )
}

export default PostCreate