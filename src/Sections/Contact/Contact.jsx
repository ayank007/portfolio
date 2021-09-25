import React, {useEffect} from 'react'
import Lines from '../../Components/Lines/Lines'
import {Heading1} from "../../Components/Heading/Heading"
import Social from "../../Components/Social/Social"
import swal from 'sweetalert'

import "./Contact.css"
const Contact = () => {

    useEffect(()=>{
        const scriptURL = "https://script.google.com/macros/s/AKfycbwJma0PDQ855ERUqzzt7rB94h5eBd80RI4qG6yS3kZhxpWo4o9e/exec"
        const form = document.forms['contactMe']
        document.querySelector('#ContactForm').addEventListener('submit', function(e) {
            e.preventDefault()
            var reasons=''
            if(document.querySelector('#cbx1').checked){
                reasons+='| Hire |'
            }
            if(document.querySelector('#cbx2').checked){
                reasons+='| Suggestion |'
            }
            if(document.querySelector('#cbx3').checked){
                reasons+='| Other |'
            }
            document.querySelector('.reasonInput').value=reasons
            var dates=new Date()
            document.querySelector('.dateInput').value=dates
            document.querySelector('.submitBtn').classList.add('pointer-events-none')
            document.querySelector('.submitBtn').innerHTML="Submitting"
            
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    swal({
                        title: "Thank You!",
                        text: "Your Message Has Been Sent",
                        icon: "success",
                        button: "ok",
                    })
                    .then(msg=>{
                        document.querySelector('.submitBtn').classList.remove('pointer-events-none')
                        document.querySelector('.submitBtn').innerHTML="Submit"
                    })
                    form.reset();
                })
                .catch(error => console.error('Error!', error.message))
        })
    },[]);

    return(
        <div id="Contact" className='section dark bg-dark text-light flex flex-col justify-center'>
            <Lines />
            <div className="absolute top-24">
                <Heading1 title="Contact Me ?" />
            </div>
            <Social />
            <form method='POST' name='contactMe' id='ContactForm'>
                <div className='checkBoxs'>
                    <div>
                        <input type="checkbox" id="cbx1" data-type='hireme' className='cbx' />
                        <label htmlFor="cbx1" className="check">
                        <svg width="18px" height="18px" viewBox="0 0 18 18" data-type='hireme'>
                            <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                            <polyline points="1 9 7 14 15 4"></polyline>
                        </svg>
                        <span>&nbsp;Hire Me</span>
                        </label>
                    </div>
                    <div>
                        <input type="checkbox" data-type='suggestion' id="cbx2" className='cbx' />
                        <label htmlFor="cbx2" className="check">
                        <svg width="18px" height="18px" viewBox="0 0 18 18" data-type='suggestion'>
                            <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                            <polyline points="1 9 7 14 15 4"></polyline>
                        </svg>
                        <span>&nbsp;Report a bug / Suggest Something</span>
                        </label>
                    </div>
                    <div>
                        <input type="checkbox" data-type='other' id="cbx3" className='cbx' />
                        <label htmlFor="cbx3" className="check">
                        <svg width="18px" height="18px" viewBox="0 0 18 18" data-type='other'>
                            <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                            <polyline points="1 9 7 14 15 4"></polyline>
                        </svg>
                        <span>&nbsp;Others</span>
                        </label>
                    </div>
                </div>
                <div className="inpGrp">
                    <input placeholder="Your name please" type="text" id='contactName' minLength="1" name='Name' required autoComplete='off' />
                    <span className="underline"></span>
                </div>
                <input name='Reasons' className='hiddenInput reasonInput' />
                <input name='Date' className='hiddenInput dateInput' />
                <div className="inpGrp">
                    <textarea placeholder="Any Messages ? (don't forget to provide contact info)" id="message" minLength="1" className='form-control' name='Message' required />
                    <span className="underline"></span>
                </div>
                <button type='submit' className='link submitBtn'>Submit</button>
            </form>
        </div>
    )
}
export default Contact