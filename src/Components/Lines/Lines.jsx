import React from 'react'
const Lines = (props) => {
    let count
    if(props.count===undefined){
        count=6
    }
    else{
        count = props.count
    }
    return(
        <div className='lines pointer-events-none h-full absolute z-0 inset-0 w-full flex flex-wrap'>
            {[...Array(count)].map((_,i)=>{
                return(
                    <div key={i} className="max-w-full flex-1 flex-basis border-r border-line dark:border-line2"></div>
                )
            })}
        </div>
    )
}

export default Lines;