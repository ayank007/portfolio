import React, {useRef, useEffect} from "react"

import { HashLink as Link } from 'react-router-hash-link'

import Lines from '../../Components/Lines/Lines'

import "./Project.css"

const Project = (props) => {
    
    const pageChange = props.pageChange
    const url = window.location.href
    let projectNum = url[url.length-1]
    const data=props.data[projectNum]

    const homeLink = useRef(null)
    useEffect(()=>{
        homeLink.current.addEventListener('click', function(){
			pageChange()
			setTimeout(function(){
				window.location.href=`/#/`;
			},1200)
		})
    })

    return(
        <div id="Project" className='section text-xl bg-dark dark text-light h-auto'>
            <Lines />
            <Link ref={homeLink} to="#Root" smooth className="backToHomeBtn sticky top-8 flex gap-x-3 transform -translate-x-full1 w-max text-base items-center">
                <svg className="transform -rotate-90" width="16" height="16" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.0607 1.37473C12.4749 0.788944 11.5251 0.788944 10.9393 1.37473L1.3934 10.9207C0.807611 11.5065 0.807611 12.4562 1.3934 13.042C1.97919 13.6278 2.92893 13.6278 3.51472 13.042L12 4.55671L20.4853 13.042C21.0711 13.6278 22.0208 13.6278 22.6066 13.042C23.1924 12.4562 23.1924 11.5065 22.6066 10.9207L13.0607 1.37473ZM13.5 27.7202L13.5 2.43539H10.5L10.5 27.7202H13.5Z" fill="white"/>
                </svg> 
                <span>Back To Home</span>
            </Link>
            <div className="projectImage">
                <img src={data["image"][0]} alt="Thumbnail"/>
            </div>
            <div className="projectIntro text-xl">
                <p className="font-semibold">{data["overview"]}</p>
                <h1 className="text-7xl anton my-2 leading-snug tracking-wider capitalize">
                    {data["title"]}
                </h1>
                <br />
                <div className="flex text-base flexCon">
                    <div className="w-3/4 pr-16 leading-loose">                    
                        <p className="text-xl">
                            Toolbelt : &nbsp; {data["toolbelt"]}
                        </p>
                        <br />
                        <p>
                            {data["intro"]}
                        </p>
                        {
                            data["dummy"] ?
                            <p>** Texts, Images, SVGs have been replaced with stand in content.</p> :
                            <p></p> 
                        }
                        <br />
                        <p>
                            {data["objective"]}
                        </p>
                    </div>
                    <div className="w-1/4 capitalize">
                        <h6 className="text-xl font-semibold"><span>Role</span></h6>
                        <p>{data["role"]}</p>
                        <h6 className="text-xl font-semibold mt-6"><span>Client</span></h6>
                        <p>{data["client"]}</p>
                        <h6 className="text-xl font-semibold mt-6"><span>Date</span></h6>
                        <p>{data["date"]}</p>
                    </div>
                </div>
            </div>
            <div className="projectImage">
                <img src={data["image"][1]} alt="I2" />
            </div>
            <div className="text-base">
                <p>
                    The website has mainly {data["section"].length} section.
                </p>
                <ul className="ml-8" style={{listStyleType:"circle"}}>
                    {data["section"].map((item,el)=>{
                        return(
                            <li key={el}>{item}</li>
                        )
                    })}
                </ul>
            </div>
            <div className="projectImage">
                <img src={data["image"][2]} alt="I3" />
            </div>
            <div className="flex flexCon">
                <div className="w-3/4 pr-16 leading-loose text-base">
                    <p className="text-xl">
                        A Challenge Faced
                    </p>
                    <br />
                    <p dangerouslySetInnerHTML={{__html: data["challenge"]}}></p>
                </div>
                <div className="w-1/4 capitalize">
                    <h6 className="text-xl font-semibold"><span>Colors</span></h6>
                    <div className="mt-2 flex flex-col gap-y-2 text-sm uppercase">
                        {data["colors"].map((item,el)=>{
                            return(
                                <div key={el} className="flex items-center gap-2">
                                    <div className="w-10 h-10 rounded-full" style={{background:item}}></div>
                                    {item}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            {data["image"].map((item,el)=>{
                if(el>=3){
                    return(
                        <div key={el} className="projectImage">
                            <img src={item} alt="rest"/>
                        </div>
                    )
                }
                return 0;
            })}
        </div>
    )
}

export default Project