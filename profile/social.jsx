import React from 'react';

const Social = (props)=> {
    return (
        <div className="social_link">
        <h2 className="h2">social links</h2>
        <ul>
            <li><a href="#">{props.social1}</a></li>
            <li><a href="#">{props.social2}</a></li>
            <li><a href="#">{props.social3}</a></li>            
        </ul>
    </div>
    )
}

export default Social;