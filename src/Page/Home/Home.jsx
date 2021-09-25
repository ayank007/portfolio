import React, {useEffect, useState, useRef} from "react"
import {
    motion,
    useViewportScroll,
    useSpring,
    useTransform
  } from "framer-motion"
  import { HashLink as Link } from 'react-router-hash-link'

import "./Home.css"
import logo from '../../Images/logo2.png'

import Header from '../../Sections/Header/Header'
import Work from '../../Sections/Works/Works'
import About from "../../Sections/About/About"

const Home = ({pageChange}) => {
    const scrollProgress = useRef(null)
    // useEffect(()=>{
    //     if(scrollProgress.current!=null){
    //         console.log(pageURL,pageURL.includes("project"));
    //         document.addEventListener('scroll',function(){
    //             if(window.pageYOffset < 200){
    //                 scrollProgress.current.classList.add('opacity-0')
    //             }
    //             else{
    //                 scrollProgress.current.classList.remove('opacity-0')
    //             }
    //         })
    //     }
    // })

    const [isScrollingComplete, setisScrollingComplete] = useState(true)
    const { scrollYProgress } = useViewportScroll()
    const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1])
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 })

    useEffect(() => yRange.onChange(v => setisScrollingComplete(v >= 1)), [yRange])

    return(
        <div id="Root">
            <svg className="progress-icon scrollProgress" ref={scrollProgress} viewBox="0 0 60 60">
                <motion.path
                    fill="none"
                    strokeWidth="5"
                    stroke="white"
                    strokeDasharray="0 1"
                    d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                    style={{
                        pathLength,
                        rotate: 90,
                        translateX: 5,
                        translateY: 5,
                        scaleX: -1 // Reverse direction of line animation
                    }}
                />
                <motion.path
                    fill="none"
                    strokeWidth="5"
                    stroke="white"
                    d="M14,26 L 22,33 L 35,16"
                    initial={false}
                    strokeDasharray="0 1"
                    animate={{ pathLength: isScrollingComplete ? 1 : 0 }}
                />
            </svg>
            <Link to='#Root' className="pageChangeBtn z-40 text-light fixed cursor-pointer top-8 left-8">
				<div className="logo baseLogo flex" onClick={ pageChange }>
					<img src={ logo } alt="logo"/>
				</div>
			</Link>
            <Link to='#Root' className="pageChangeBtn z-40 text-light fixed cursor-pointer top-8 left-22 mix-blend-difference bg-transparent">
                <div className="logo baseLogo flex" onClick={ pageChange }>
                    <div className='flex flex-col ml-2.5'>
						<h1 className='text-xl mt-2 authorName'>
							<b>
								Ayan Koley
							</b>
						</h1>
						<h2 className='font-medium'>Portfolio</h2>
					</div>
				</div>
            </Link>
            <Header />
            <Work pageChange={pageChange} />
            <About />
        </div>
    )
}

export default Home