import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import PostsList from './components/PostsList/PostsList'
import PostDetails from './components/PostDetails/PostDetails'
import image from 'images/dish01.jpg'

const initTasks = [
    {id: 0, name: "qq", timeStart: 0, timeEnd: 15, key: "init0"},
    {id: 1, name: "qq", timeStart: 15, timeEnd: 50, key: "init1"},
    {id: 2, name: "qq", timeStart: 50, timeEnd: 60, key: "init2"},
]

const initComponents = [
    {id: 0, name: "comp", quantity: 1, key: "init0"},
    {id: 1, name: "comp", quantity: 1, key: "init1"},
]

const initPost = {
    title: "Title", img: image, length: 60,
    comps: initComponents, tasks: initTasks
}

const App = () => {
    
    return(
        <div className="App">
            <Sidebar/>
            <div className="pageContent">
            <Routes>
                <Route path="/" element={<PostsList />}/>
                <Route path="/post" element={<PostDetails />}/>
                <Route path="/new" element={<PostDetails post={initPost} editable={true} />}/>
            </Routes>
            </div>
        </div>

    )
}

export default App;