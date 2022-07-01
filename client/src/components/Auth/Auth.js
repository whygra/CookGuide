import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'

import {GoogleLogin} from '@react-oauth/google'

import * as actions from 'constants/actionTypes'
import {signin, signup} from 'actions/auth'

import styles from './Auth.module.css'

const initForm = {email: '', username: '', password: '', passwordConfirm: ''}

const Auth = (props) => {

    const dispatch = useDispatch()
    const history = useNavigate()
    const [isSignup, setIsSignup] = useState(false)
    const [formData, setFormData] = useState(initForm)

    const googleSuccess = async (res) => {
        const result = res?.profileObj
        const token = res?.tokenId

        try {
            dispatch({type: actions.AUTH, data:{result, token}})
            history('/')
        }
        catch(error) {
            console.log(error)
        }
    }

    const googleFailure = (res) => {
        console.log("failure")
        console.log(res)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isSignup){
            dispatch(signup(formData, history))
        } else {
            dispatch(signin(formData, history))
        }
    }

    const handleChange = (e) => {
        e.preventDefault()
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return(
        <div className={styles.formWrapper}>
        <form>
            <input name="email" type="text" placeholder="e-mail" onChange={handleChange}/>
            {isSignup && <input name="username" type="text" placeholder="username" onChange={handleChange}/>}
            
            <input name="password" type="password" placeholder="password" onChange={handleChange}/>
            {isSignup && <input name="passwordConfirm" type="password" placeholder="confirm password" onChange={handleChange}/>}
            <br></br>
            <button onClick={handleSubmit}>submit</button>
        </form>
        <div className={styles.text}>
            {isSignup ? "already a user? " : "don't have a profile? "}
            <u className={styles.link} onClick={() =>
            {
                setIsSignup(!isSignup)
            }}>{isSignup ? " sign in" : " sign up"}</u>
        </div>
        {/* <GoogleLogin
            clientId="283038448709-7lb07rc2ngjfqdeelg2fjuah9kahvjho.apps.googleusercontent.com"
            render={(renderProps)=>(
                <button
                onClick={renderProps.onClick} 
                disabled={renderProps.disabled} 
                className={styles.googleBtn}>
                    Google Sign-In
                </button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy={"single_host_origin"}
        /> */}
        </div>
    )
}

export default Auth