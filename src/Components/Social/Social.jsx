import React from 'react'
import "./Social.css"

const Social = () => {
    return(
        <ul className="social-list gap-x-1">
            <li className="media github">
                <a href="https://www.github.com/ayank007" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github"></i>
                </a>
            </li>
            <li className="media linkedin">
                <a href="https://www.linkedin.com/in/ayan-koley-3370a9190" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
            </li>
            <li className="media gmail">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ayankoley@gmail.com&su=SUBJECT&body=BODY" target='_blank' rel="noopener noreferrer">
                <i className="fa fa-envelope" aria-hidden="true"></i></a>
            </li>
            <li className="media twitter">
                <a href="https://twitter.com/messages/1129830842065346560-1129830842065346560?text="
                    target='_blank' rel="noopener noreferrer">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
            </li>
        </ul>
    )
}

export default Social