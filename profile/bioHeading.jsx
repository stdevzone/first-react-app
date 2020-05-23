import React from 'react';

const Heading = (props)=> {
    return (
        <div className="profile_heading">
            <h2>{props.name}</h2>
            <p>{props.title}</p>
        </div>
    )
}

export default Heading;