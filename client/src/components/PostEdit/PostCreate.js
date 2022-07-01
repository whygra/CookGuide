import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './PostEdit.module.css'
import { useNavigate } from 'react-router-dom';

import PostEdit from './PostEdit'
import { createPost } from 'actions/posts'
import { resetEditable } from 'actions/editablePost'
import Auth from 'components/Auth/Auth'

const PostCreate = () => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    useEffect(()=> {
        const token = user?.token

        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [])


    useEffect(()=> {
        dispatch(resetEditable())
    }, [])

    const post = useSelector((state) => state.editablePost)
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createPost(post))
        navigate(`/`)
    }

    // show login form if user is not logged in
    if (!user){
        return (<>
            <h1>Log in to be able to create new posts</h1>
            <Auth/>
        </>)
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