import './App.css'
import React, {useEffect} from 'react'
import { HashRouter as Router,Switch,Route } from 'react-router-dom'
import Cursor from './Components/Cursor/Cursor'
import Contact from './Sections/Contact/Contact'
import Navbar from './Sections/Navbar/Navbar'
import Sidebar from './Sections/Sidebar/Sidebar'
import Home from "./Page/Home/Home"
import { PopupModal } from './Components/PopupModal/PopupModal'
import Project from "./Page/Project/Project"
import data from "./Content/Content.json"

const App = () => {

    const pageChange=()=>{
        document.querySelector('#Navbar').classList.remove('opened')
        document.querySelector('.hamburger').classList.remove('opened')
        setTimeout(function(){
            document.querySelector('#Navbar').classList.add('putBehind')
        },300)
        document.querySelectorAll('.nav1con ul li').forEach(function(link){
            link.style.animation=''
        })
        document.querySelectorAll('.pageChangeBtn').forEach(el=>{
            el.classList.add('cursor-none')
        })
        document.querySelectorAll('.pageX').forEach(pageX=>{
            pageX.classList.add('come')
        })
        setTimeout(function () {
            document.querySelectorAll('.pageX').forEach(pageX=>{
                pageX.classList.add('go')
            })
        },1200)
        setTimeout(function(){
            document.querySelectorAll('.pageX').forEach(pageX=>{
                pageX.classList.remove('come')
            })
            document.querySelectorAll('.pageX').forEach(pageX=>{
                pageX.classList.remove('go')
            })
            document.querySelectorAll('.pageChangeBtn').forEach(el=>{
                el.classList.remove('cursor-none')
            })
        },2600)
    }

    useEffect(()=>{
        const cursor = document.querySelector(".cursor")
        const follower = document.querySelector(".cursor-follower")
        document.querySelectorAll(".link").forEach(el=>{
            el.addEventListener("mouseenter", function(){
                cursor.classList.add("active")
                follower.classList.add("active")
            })
            el.addEventListener("mouseleave", function(){
                cursor.classList.remove("active")
                follower.classList.remove("active")
                follower.classList.remove("activeVideo")
            })
        })
        // document.querySelector(".project7").addEventListener("mouseenter", function() {
        //     follower.classList.add("activeVideo");
        // })
    })

    return (
        <Router>
            <div className="pageX1 pageX"></div>
            <div className="pageX2 pageX"></div>
            <div className="pageX3 pageX"></div>
            <div className="pageX4 pageX">
                <h1 className='pageTxt'>Ayan is Thinking</h1>
            </div>
            <Sidebar pageChange={pageChange} />
            <Cursor />
            <Navbar pageChange={pageChange} />
            <PopupModal />
            <div id="Main" className='z-0'>
                <Switch>
                    <Route path="/" exact>
                        <Home pageChange={pageChange} data={data} />
                    </Route>
                    <Route path="/Project">
                        <Project pageChange={pageChange} data={data["work"]} />
                    </Route>
                </Switch>
                <Contact />
            </div>
        </Router>
    );
}

export default App
