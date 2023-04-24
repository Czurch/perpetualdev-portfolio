import React, { useEffect, useRef } from 'react'

const Reference = ({reference,...props}) => { 
    console.log(reference)
    return (
        <div className="reference-card">
            <div>
                <h2 className='bg-indigo-500'>{reference.name}</h2>
                <h3>{reference.title}</h3>
            </div>
            <div>
                <p>{`"${reference.message}"`}</p>
            </div>
        </div>
    )
}

export default Reference;