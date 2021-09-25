import React from 'react'

import "./Heading1.css"

export const Heading1 = (props) => {
    return(
        <h1 className="w-max heading1">
            {props.title}
            <span>{props.children}</span>
        </h1>
    );
}