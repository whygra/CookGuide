import React, { useEffect } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { getPosts } from './actions/posts'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import PostsList from './components/PostsList/PostsList'
import PostDetails from './components/PostDetails/PostDetails'

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
                <Route path="/post" element={<PostDetails editable={false} />}/>
                <Route path="/new" element={<PostDetails editable={true} />}/>
            </Routes>
            </div>
        </div>

    )
}

export default App;