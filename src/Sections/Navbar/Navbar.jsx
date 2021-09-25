import React, { useEffect, useRef } from 'react'
import logo from '../../Images/logo2.png'
import './Navbar.css'
import { HashLink as Link } from 'react-router-hash-link'
import Lines from '../../Components/Lines/Lines'
import Social from '../../Components/Social/Social'
import TagCloud from 'TagCloud'
import { showPopupModal } from '../../Components/PopupModal/PopupModal'

const Navbar = ({pageChange}) => {

	const aboutLink = useRef(null)
	const homeLink = useRef(null)
	const workLink = useRef(null)
	const contactLink = useRef(null)
	const seLink = useRef(null)
	
	const goToHome  = () => {
		pageChange()
		setTimeout(function(){
			window.location.href=`/portfolio/#/`;
		},1200)
	}

	useEffect(()=>{
		const containerTC = '.tagcloudCon';
		const textsTC = [
			'Html', 'Expo', 'JavaScript',
			'C', 'Python', 'React', 'JQuery',
			'Redux', 'Flask', 'Figma',
			'MS Excel', 'SQL', 'Powerpoint',
			'Dev C++','React Native',
			'Ngrok', 'Anaconda', 'MS Word',
			'Eclipse', 'Gambus', 'Tailwind',
			'Visual Studio', 'XD',
			'Framer Motion', 'Bootstrap', 'SVG',
			'Git', 'Github', 'Postman',
			'Tachyons', 'JSON', 'Sass',
			'Photopia', 'Knex', 'Android Studio',
			'Css', 'React Native', 'API',
			'Gsap','Animaker',
		];
		const optionsTC = {radius:160,maxSpeed:'fast'};
		TagCloud(containerTC, textsTC, optionsTC);
	})

	useEffect(()=>{
        contactLink.current.addEventListener('click', goToHome)
        workLink.current.addEventListener('click', goToHome)
        aboutLink.current.addEventListener('click', goToHome)
        homeLink.current.addEventListener('click', goToHome)
        seLink.current.addEventListener('click', goToHome)
    })
    return (
		<nav id="Navbar" className="putBehind fixed bg-dark text-light overflow-hidden flex top-0 left-0 h-full">
			<Link to='#Root' className="pageChangeBtn z-50 text-light absolute cursor-pointer top-8 left-8">
				<div className="logo flex" onClick={ pageChange }>
					<img src={ logo } alt="logo"/>
				</div>
			</Link>
            <Link to='#Root' className="pageChangeBtn z-50 text-light fixed cursor-pointer top-8 left-22 mix-blend-difference bg-transparent">
                <div className="logo flex" onClick={ pageChange }>
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
			<div className="nav1 bg-black dark text-light w-1/2 h-full flex justify-center items-center flex-col z-40">
				<Lines count={3} />
				<div className="nav1con">
					<div className="heading">
						<div>Menu</div>
					</div>
					<ul>
						<li>
							<Link to='#Root' smooth className="link pageChangeBtn" ref={homeLink}>
								<h1>Home</h1>
							</Link>
						</li>
						<li>
							<Link smooth to="#Work" className="link pageChangeBtn" ref={workLink}>
								<h1>Projects</h1>
							</Link>
						</li>
						<li>
							<Link smooth to="#AboutDiary" className="link pageChangeBtn" ref={aboutLink}>
								<h1>About Me</h1>
							</Link>
						</li>
						<li>
							<Link smooth to="#About" className="link pageChangeBtn" ref={seLink}>
								<h1>Experience</h1>
							</Link>
						</li>
						<li className="link">
							<a target="_blank" rel="noreferrer" href="https://www.buymeacoffee.com/ayank">
								<h1>Buy Me a Coffee</h1>
							</a>
						</li>
						<li>
							<Link smooth to="#Contact" className="link pageChangeBtn" ref={contactLink}>
								<h1>Contact</h1>
							</Link>
						</li>
					</ul>
				</div>
				<div className="h-12 flex gap-x-10 items-center w-full cvs">
					<div className="cursor-pointer" onClick={() => showPopupModal("pdf")}>View CV</div>
					<div className="cursor-pointer" onClick={() => showPopupModal("video")}>Video CV</div>
				</div>
			</div>
			<div className="nav2 w-1/2 h-full flex justify-center items-center flex-col z-40">
				<Lines count={3} />
				<div className="nav2con">
					<div className="heading">
						<div>More</div>
					</div>
					<div className="pl-4 w-3/5 h-full">
                        <div className="tagcloudBg h-72 w-72">
                            <div className='tagcloudCon'></div>
    		            </div>
					</div>
				</div>
				<div className="social">
					<Social />
				</div>
			</div>
		</nav>
    );
}

export default Navbar;