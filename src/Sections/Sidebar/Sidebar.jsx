import React, { useEffect, useRef } from 'react'
import './Sidebar.css'
import { HashLink as Link } from 'react-router-hash-link'
import {isMobile} from 'react-device-detect'

const Sidebar = ({pageChange}) => {

	const workLink = useRef(null)
	const hamBoxME = (e) => {
		let ham=document.querySelector('.hamBox')
		if (!isMobile) {
			ham.style.setProperty('--bg',`black`)
			document.querySelector('.cursor-follower').style['display']='none'
			document.querySelector('.cursor').style['display']='none'
		}
	}

	const hamBoxML = (e) => {
		let ham=document.querySelector('.hamBox')
		if (!isMobile) {
			ham.style.setProperty('--x',`50%`)
			ham.style.setProperty('--y',`50%`)
			ham.style.setProperty('--bg',`white`)
			document.querySelector('.cursor-follower').style['display']='block'
			document.querySelector('.cursor').style['display']='block'
		}
	}

	const hamBoxMM = (e) => {
		let ham=document.querySelector('.hamBox')
		if (!isMobile) {
			ham.style.setProperty('--x',`${e.pageX - window.innerWidth + 80}px`)
			ham.style.setProperty('--y',`${e.pageY - window.pageYOffset}px`)
		}
	}

	const hamBoxClick = (e) => {
		if(document.getElementById('Navbar').classList.contains('opened')){
			document.querySelector('#Navbar').classList.remove('opened')
			document.querySelector('.hamburger').classList.remove('opened')
			setTimeout(function(){
				document.querySelector('#Navbar').classList.add('putBehind')
			},300)
			document.querySelectorAll('.nav1con ul li').forEach(function(link){
				link.style.animation=''
			})
		}
		else{
			document.querySelector('#Navbar').classList.add('opened')
			document.querySelector('#Navbar').classList.remove('putBehind')
			document.querySelector('.hamburger').classList.add('opened')
			document.querySelectorAll('.nav1con ul li').forEach(function(link,index){
				link.style.animation=`navLinkFade 0.5s ease forwards ${0.3 + index / 11}s`
			})
		}
	}

	useEffect(()=>{
        document.addEventListener('scroll',function(){
            if(window.pageYOffset > 200){
				document.querySelector('.goToTop').classList.add('active');
            }
			else{
				document.querySelector('.goToTop').classList.remove('active');
            }
        })
    })

	useEffect(()=>{
        workLink.current.addEventListener('click', function(){
			pageChange()
			setTimeout(function(){
				window.location.href=`/#/`;
			},1200)
		})
    })

    return (
		<div id="Sidebar">
			<div className="hamBox"
				onMouseEnter={ hamBoxME } 
				onMouseLeave={ hamBoxML }
				onMouseMove={ hamBoxMM }
				onClick={ hamBoxClick }
			>
				<div className="hamburger">
					<div className="hamburgerIcon">
						<div>
							<div className="hamLine1"></div>
							<div className="hamLine2"></div>
							<div className="hamLine3"></div>
						</div>
					</div>
				</div>
			</div>
			<div className="sideNav">
				<div>
					<Link smooth to="#Work" className="link workLink" ref={workLink}>Experience</Link>
				</div>
			</div>
			<div className="sideContact">
				<div>
					<Link smooth to="#Contact" className="link">Contact Me</Link>
				</div>
			</div>
			<Link className="goToTop" smooth to="#Root">
				<div>
					<svg width="23" height="26" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M13.0607 1.37473C12.4749 0.788944 11.5251 0.788944 10.9393 1.37473L1.3934 10.9207C0.807611 11.5065 0.807611 12.4562 1.3934 13.042C1.97919 13.6278 2.92893 13.6278 3.51472 13.042L12 4.55671L20.4853 13.042C21.0711 13.6278 22.0208 13.6278 22.6066 13.042C23.1924 12.4562 23.1924 11.5065 22.6066 10.9207L13.0607 1.37473ZM13.5 27.7202L13.5 2.43539H10.5L10.5 27.7202H13.5Z" fill="black"/>
					</svg>                    
				</div>
			</Link>
		</div>
    );
}

export default Sidebar;