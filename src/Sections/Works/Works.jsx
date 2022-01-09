import React, {useEffect, useRef} from 'react'
import {HashLink as Link} from "react-router-hash-link"
import Lines from '../../Components/Lines/Lines'
import {Heading1} from "../../Components/Heading/Heading"

import xyz from "../../Images/xyz.png"
import bankbuddy from "../../Images/bankbuddy.png"
import fitmylan from "../../Images/fitmylan.png"
import cover from "../../Images/cover.png"
import akk from "../../Images/akk.png"
import "./Work.css"

const Work = ({pageChange}) => {
    const projectLink1 = useRef(null)
    const projectLink2 = useRef(null)
    const projectLink3 = useRef(null)
    const projectLink4 = useRef(null)
    const projectLink5 = useRef(null)
    const projectLink0 = useRef(null)

    useEffect(()=>{
        projectLink1.current.addEventListener('click', function(){
			pageChange()
			setTimeout(function(){
				window.location.href=`/project/project1`;
			},1200)
		})
        projectLink2.current.addEventListener('click', function(){
			pageChange()
			setTimeout(function(){
				window.location.href=`/project/project2`;
			},1200)
		})
        projectLink3.current.addEventListener('click', function(){
			pageChange()
			setTimeout(function(){
				window.location.href=`/project/project3`;
			},1200)
		})
        projectLink4.current.addEventListener('click', function(){
			pageChange()
			setTimeout(function(){
				window.location.href=`/project/project4`;
			},1200)
		})
        projectLink5.current.addEventListener('click', function(){
			pageChange()
			setTimeout(function(){
				window.location.href=`/project/project5`;
			},1200)
		})
        projectLink0.current.addEventListener('click', function(){
			pageChange()
			setTimeout(function(){
				window.location.href=`/project/project0`;
			},1200)
		})
    })
    return(
        <div id="Work" className='section dark bg-dark text-light'>
            <Lines />
            <br />
            <br />
            <Heading1 title="My key projects">👀</Heading1>
            <br />

            <div className="flex flex-wrap gap-24 justify-center items-center">
                <h1 className="absolute watermark uppercase">Freelancing</h1>
                <div className="flex flex-col gap-9">
                    <div className="flex">
                        <Link to="#Root" smooth className="link" ref={projectLink1}>
                            <div className="project project1">
                                <div className="content">
                                    <img src="https://lh3.googleusercontent.com/Xj6JswkU0xG6Ey6sHDwA3Y4ELTlyimgjFC-2IaP69bgDF9JLmhpDH0_EZWXQ8w_xdUQ0AuUcpD3qzwhGo_VanemWxKmVFGDISJKY7-ExMkV4JH1__y27IpgtSQp5XiNEjNdpq7ky4A=w2400" alt="1" />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <h4 className="capitalize text-lg transform translate-x-5">landing pages of some small businesses</h4>
                    <div className="flex transform translate-x-20">
                        <Link to="#Root" smooth className="link" ref={projectLink2}>
                            <div className="project project2">
                                <div className="content">
                                    <img src={xyz} alt="2" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="flex">
                    <Link to="#Root" smooth className="link" ref={projectLink4}>
                        <div className="project project3">
                            <div className="content">
                                <img src={fitmylan} alt="3" />
                            </div>
                            <h4>A simple game hosting website</h4>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="flex flex-wrap gap-x-20 gap-y-8 mt-16 justify-around">
                <h1 className="absolute watermark uppercase">personal</h1>
                <div className="flex">
                    <Link to="#Root" smooth className="link" ref={projectLink3}>
                        <div className="project project4">
                            <div className="content">
                                <img src={bankbuddy} alt="4" />
                            </div>
                            <h4>Chatbot and Voicebot for banking assistance [college final project]</h4>
                        </div>
                    </Link>
                </div>
                <div className="flex">
                    <Link to="#Root" smooth className="link" ref={projectLink0}>
                        <div className="project project0">
                            <div className="content">
                                <img src={cover} alt="0" />
                            </div>
                            <h4>My Portfolio</h4>
                        </div>
                    </Link>
                </div>
                <div className="flex">
                    <Link to="#Root" smooth className="link" ref={projectLink5}>
                        <div className="project project5">
                            <div className="content">
                                <img src={akk} alt="5" />
                            </div>
                            <h4>A simple web profile for college professors</h4>
                        </div>
                    </Link>
                </div>
            </div>
            <br /><br /><br />
            <br />
        </div>
    )
}
export default Work