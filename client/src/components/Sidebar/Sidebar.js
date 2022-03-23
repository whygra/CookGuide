import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import {useState} from 'react'
import styles from './Sidebar.module.css'
import logo from 'images/9th.png'

const Sidebar = () => {

    const [width, setWidth] = useState(60)

    const toggleWidth = () => {
        setWidth(width === 60 ? 250 : 60);
    }

    return(
        <div className={styles.sidebar} style={{width: `${width}px`}}>
            <img src={logo} alt="logo" height="60"
            onClick={toggleWidth} style={{width: `${width}px`, height: `${width*0.6}px`}}/>
            Recipes
            <Link to="/">Home</Link>
            <Link to="/new">New</Link>
        </div>
    )
}

export default Sidebar;