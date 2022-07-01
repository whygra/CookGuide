import React, { useEffect } from 'react'
import {Routes, Route, Link, useNavigate, useLocation} from 'react-router-dom'
import {useState} from 'react'
import decode from 'jwt-decode'

import styles from './Sidebar.module.css'
import logo from 'images/9th.png'
import { useDispatch } from 'react-redux'
import * as actions from 'constants/actionTypes'

const Sidebar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

    const [width, setWidth] = useState(60)

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    useEffect(()=>{
        const token = user?.token

        if(token){
            const decodedToken = decode(token)

            if(decodedToken.exp * 1000 < new Date().getTime())
                logout()
        }
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    const logout = () => {
        dispatch({type: actions.LOGOUT})

        navigate('/')

        setUser(null)
    }

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
            <Link to="/post">Post</Link>
            {user ?
            <a onClick={logout}>Logout</a>
            :
            <Link to="/auth">Auth</Link>
            }  
        </div>
    )
}

export default Sidebar;