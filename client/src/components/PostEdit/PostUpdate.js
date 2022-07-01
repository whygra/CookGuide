import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './PostEdit.module.css'
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom';

import PostEdit from './PostEdit'
import { updatePost, createPost } from 'actions/posts'
import { setEditable, resetEditable } from 'actions/editablePost'

import Auth from 'components/Auth/Auth'

const PostUpdate = () => {

    const [searchParams, setPostId] = useSearchParams()
    const postId = searchParams.get("post")

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    useEffect(()=> {
        const token = user?.token

        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [])

    // set redux state
    useEffect(()=> {
        postId ?
        dispatch(setEditable(postId))
        :
        dispatch(resetEditable())
    }, [location])

    const post = useSelector((state) => state.editablePost)

    const handleSubmit = (e) => {
        e.preventDefault()

        // update
        if(postId){

            (user.result._id == post.creator) &&
            dispatch(updatePost(post)).then(() => {
                navigate(`/view/?post=${postId}`)
            })

        } else {
        // create
            dispatch(createPost({...post, creator: user?.result?._id})).then(() => {
            navigate(`/`)
        })
        }
    }
    
    // show login form if user is not logged in
    if (!user){
        return (<>
            <h1>Log in to be able to edit your posts</h1>
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

export default PostUpdate