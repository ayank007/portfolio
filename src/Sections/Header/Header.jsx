import React from 'react'

import { HashLink as Link } from 'react-router-hash-link'

import Lines from '../../Components/Lines/Lines'
import "./Header.css"

import messi from "../../Images/messi.jpg"
import ron from "../../Images/ron.jpg"
import f1 from "../../Images/f1.png"
import football from "../../Images/football.png"

const Header = () => {

    return(
        <header id="Heading" className='section text-xl bg-light text-dark flex'>
            <Lines />            
            <div className="footballSection absolute flex flex-wrap gap-x-3 items-end">
                <img src={messi} alt="Messi" className="messi" />
                <img src={ron} alt="Ronaldo" className="ronaldo" />
                <img src={f1} alt="f1" className="hangingFootball" />
            </div>
            <div className="rect1 absolute top-0 left-0 w-1/6 h-64 bg-dark"></div>
            <div className="rect2 absolute bottom-0 right-0 w-1/6 h-96 bg-dark"></div>
            <div className="knowMeBtn">
                <Link to="#Work" smooth>
                    <div className="knowMeBtnText">
                        <p>My Works</p>
                    </div>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="1024.000000pt" height="490.000000pt" viewBox="0 0 1024.000000 490.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,490.000000) scale(0.100000,-0.100000)"
                        fill="#000000" stroke="none">
                        <path d="M6403 4882 c-99 -35 -163 -94 -205 -189 -17 -38 -20 -61 -16 -132 4
                        -75 25 -156 166 -629 89 -298 162 -544 162 -547 0 -3 -1465 -5 -3255 -5
                        l-3255 0 0 -925 0 -925 3255 0 c1790 0 3255 -4 3255 -8 0 -5 -73 -249 -162
                        -543 l-161 -534 -1 -110 c-1 -94 2 -116 21 -150 28 -54 112 -131 171 -158 67
                        -31 197 -31 265 0 42 20 322 208 1622 1088 182 123 407 275 500 339 996 673
                        1434 969 1452 984 22 17 10 25 -1000 707 -562 380 -1357 917 -1767 1194 -410
                        277 -767 515 -795 529 -67 34 -178 40 -252 14z" />
                        </g>
                    </svg>
                </Link>
            </div>
            <div className='headingCard'>
                <h1 className="noDisplay">Ayan Koley</h1>
                <h1 className="noDisplay">Hi there, my name is Ayan Koley. I am a professional Designer and Developer and it's my portfolio. I love prototyping, coding, pen testing and finally executing my thought processes into Webapp, Mobile App, GUI software etc.</h1>
                <h1 className="capitalize">Hello, my name is Ayan Koley</h1>
                <div className='whatIDo capitalize'>
                    <h2 id="whatIDo">Designer / Developer</h2>
                </div>
                <h3 className='shortIntro'>
                    I am a frontend focused full-stack developer and a freelancer with a keen interest in technology & coding. Looking forward for my next challenges.
                </h3>
                <div className='btns'>
                    <div className='link'>
                        <Link smooth to="#About">
                            <div className="btnAnm">
                                <div></div>
                            </div>
                            Know me more??
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bookStack1 w-1/4 absolute h-44 left-0 bottom-0 pr-5">
                <div className="drwr top-2 w-full flex h-10 bg-brown3">
                    <div className="flex-1 flex items-center justify-center">
                        <span className="w-2.5 h-2.5 rounded-full bg-brown1"></span>
                    </div>
                    <div className="flex-1 flex items-center justify-center">
                        <span className="w-2.5 h-2.5 rounded-full bg-brown1"></span>
                    </div>
                </div>
                <div className="bsbg w-full h-28 flex items-end justify-end">
                    <div className="tilt-book">
                        <div className="book4 headerBook"></div>
                    </div>
                        <div className="book1 headerBook"></div>
                    <div className="book4 headerBook"></div>
                    <div className="book3 headerBook"></div>
                    <div className="book3 headerBook"></div>
                        <div className="book1 headerBook"></div>
                    <div className="book2 headerBook"></div>
                    <div className="tilt-book">
                        <div className="book1 headerBook"></div>
                    </div>
                </div>
                <div className="bsTop absolute top-0 left-0 w-full h-2 z-10"></div>
                <div className="bsRight absolute top-0 right-5 w-2 h-full"></div>
                <div className="bsTop absolute top-38 transform -translate-x-5 left-0 w-full h-2"></div>

                <div className='trophyContainer'>
                    <div className='star'><i className="fa fa-star"></i></div>
                    <div className='main'></div>
                    <div className='stem1'></div>
                    <div className='stemCrease'></div>
                    <div className='stem2'></div>
                    <div className='base'></div>
                    <div className='arms'></div>
                </div>

                <img src={football} alt="football" className="w-12 h-12 rounded-full absolute -top-125 left-24 opacity-90" />

                <div className="cat">
                    <div className="body"></div>
                    <div className="head">
                        <div className="ear"></div>
                        <div className="ear"></div>
                    </div>
                    <div className="face">
                        <div className="nose"></div>
                        <div className="whisker-container">
                            <div className="whisker"></div>
                            <div className="whisker"></div>
                        </div>
                        <div className="whisker-container">
                            <div className="whisker"></div>
                            <div className="whisker"></div>
                        </div>
                    </div>
                    <div className="tail-container">
                        <div className="tail">
                            <div className="tail">
                            <div className="tail">
                                <div className="tail">
                                <div className="tail">
                                    <div className="tail">
                                    <div className="tail"></div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="circle1 absolute"></div>
            <div className="circle2 absolute top-0 left-1/3 w-28 h-28 transform -translate-x-14 -translate-y-14 border rounded-full"></div>
        </header>
    )
}

export default Header;