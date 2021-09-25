import React from 'react'

import Lines from '../../Components/Lines/Lines'
import {Heading1} from "../../Components/Heading/Heading"
import Diary from '../../Components/Diary/Diary'

import "./About.css"

const About = () => {
    return(
        <div id="About" className='dark section text-light bg-dark'>
            <Lines />
            <Heading1 title="About Me" />
            <h2 className="abtTxt mb-8 leading-loose text-lg">
                I'm a professional front-end developer and throughout my career and degree I have developed many big projects along with small assignments under my own or as a team member. While making these projects I have continuously developed myself side by side. I have used different technologies for different projects but have maintained one common thing i.e. writing structural and clean code, so that my teammates can easily follow along and myself can reuse it any point of time.
            </h2>
            <div className="flex flex-wrap gap-x-8 justify-center experience">
                <div className="flex flex-col p-7 flex-1 rounded">
                    <h1 className="text-2xl font-semibold text-white">Software Engineer</h1>
                    <h2 className="pt-2 text-lg">Orientallabs Retail Service Pvt. Ltd. (Labkafe)</h2>
                    <h3 className="text-sm pb-2">WFH & Kolkata 05/2021 – Present</h3>
                    <h4>Primary Roles - </h4>
                    <ul>
                        <li>Leading Front-end Development</li>
                        <li>Design and Build UI & UX Prototypes / Wireframes</li>
                        <li>Develop & Manage Intra Organization Applications</li>
                    </ul>
                    <h4 className="pt-2">Helping roles - </h4>
                    <ul>
                        <li>Backend Development (php + laravel)</li>
                        <li>Mobile Application Development (dust + flutter)</li>
                        <li>Testing and Debugging</li>
                    </ul>
                </div>
                <div className="flex flex-col p-7 flex-1 rounded">
                    <h1 className="text-2xl font-semibold text-white">Frontend Developer</h1>
                    <h2 className="pt-2 text-lg">Freelancer | Self Employment</h2>
                    <h3 className="text-sm pb-2">WFH, 03/2020 – Present</h3>
                    <p className="pb-2">I have started a freelancing career mainly aiming to learn some new and popular industry skills. Lately, not actively but do it when I want to.</p>
                    <p>
                    I have Worked for many small business, for companies like FitMyLan,  MaksCube, Infinity Global Technologies, Optigoo etc. and build some landing pages, business portfolio, inner pages for Travel Agency, Digital Agency, Hospital Management System, Wedding Planner Business, eCommerce Websites, dashboard etc.
                    </p>
                </div>
            </div>
            <Diary />
        </div>
    )
}

export default About