import { StylesContext } from '@material-ui/styles'
import React from 'react'
import {Link} from 'react-router-dom'

import styles from './Post.module.css'

const Post = (props) => {
    return(
        <div className={styles.post}>
            <div className={styles.imgContainer}><img src={props.post.img}/></div>
            <Link to={`/view/?post=${props.post._id}`}><h1>{props.post.title}</h1></Link>
        </div>
    )
}

export default Post