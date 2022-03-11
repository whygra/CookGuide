import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import './App.css'

import logo from './images/9th.png'
import PostsList from './components/PostsList/PostsList'
import PostDetails from './components/PostDetails/PostDetails'

const App = () => {
    return(
        <div>
            <img src={logo} alt="logo" height="60"></img>
            Recipes
            <Link to="/">Home</Link>
            <Link to="/new">New</Link>
            <Routes>
                <Route path="/" element={<PostsList />}/>
                <Route path="/post" element={<PostDetails />}/>
                <Route path="/new" element={<PostDetails editable={true} />}/>
            </Routes>
        </div>

    )
}

export default App;