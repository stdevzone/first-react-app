import React from 'react';

const Skills = (props)=>{
    return (
        <div className="skills">
            <h2>Skills: </h2>
            <ul>
                <li><a href="#">{props.skillA}</a></li>
                <li><a href="#">{props.skillB}</a></li>
                <li><a href="#">{props.skillC}</a></li>
                <li><a href="#">{props.skillD}</a></li>
               
            </ul>
        </div>
    )
}

export default Skills;