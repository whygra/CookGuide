import React, { useEffect } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { getPosts } from './actions/posts'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import PostsList from './components/PostsList/PostsList'
import PostView from './components/PostView/PostView'
import PostUpdate from './components/PostEdit/PostUpdate'
import PostCreate from './components/PostEdit/PostCreate'

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])
    
    return(
        <div className="App">
            <Sidebar/>
            <div className="pageContent">
            <Routes>
                <Route path="/" element={<PostsList />}/>
                <Route path="/view" element={<PostView />}/>
                <Route path="/edit" element={<PostUpdate/>}/>
                <Route path="/new" element={<PostCreate/>}/>
            </Routes>
            </div>
        </div>

    )
}

export default App;