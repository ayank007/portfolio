import React, {useEffect} from 'react'
import "./Modal.css"
import AK from "../../Images/AK.pdf"

const hidePopupModal = (e) => {
    const path = e.composedPath();
    if(path.some(el => el.id === 'popupModal')){
        return;
    }
    document.querySelector(".popupModal-bg").classList.remove("active");
}

export const showPopupModal = (type) => {
    if(type==="video"){
        document.querySelector("#popupModal iframe[title='VideoResume']").classList.remove("hidden");
        document.querySelector("#popupModal iframe[title='Resume']").classList.add("hidden");
    }
    else{
        document.querySelector("#popupModal iframe[title='Resume']").classList.remove("hidden");
        document.querySelector("#popupModal iframe[title='VideoResume']").classList.add("hidden");
    }
    document.querySelector(".popupModal-bg").classList.add("active");
}

export const PopupModal = () => {
    useEffect(()=>{
        document.querySelector(".popupModal-bg").addEventListener("click", hidePopupModal);
    });

    return(
        <div className="popupModal-bg w-full h-full pointer-events-none opacity-0 z-50 fixed top-0 left-0 flex items-center justify-center transition duration-300">
            <div id="popupModal" className="popupModal max-w-full h-auto bg-white rounded-2xl z-10 p-4 transform -translate-y-20 transition duration-500">
                <iframe src={AK} title="Resume" frameBorder="0" className="w-full h-96"></iframe>
                <iframe src="https://www.youtube.com/embed/48deIoNls_E" title="VideoResume" frameBorder="0" className="w-full h-96 hidden" allowFullScreen></iframe>
            </div>
        </div>
    );
}