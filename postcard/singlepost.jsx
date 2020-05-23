import React from 'react';
import image from '../nav/images/postimg.jpg'

const Singlepost = (props)=> {
    return (

        <div className="post_single_box">
                <div className="thumbnail_img">
                    <img src= {image} alt=""/>      
                </div>
                <div className="post_content">
                    <h3>{props.Ptitle}</h3>
                    <div className="metabox">
                        <ul>
                            <li><a href="#">Author</a></li>
                            <li><a href="#">Date</a></li>
                            <li><a href="#">Category</a></li>
                        </ul>
                    </div>
                    <p>{props.Pdescription}</p>
                    
                    <div className="v_m_btn_and_ld_btn">
                        <button className="viwe_more">View More</button>
                        <div className="like_dislike_btn">
                            <li><span><i class="fas fa-thumbs-up"></i></span>10</li>
                            <li><span><i class="fas fa-thumbs-down"></i></span>0</li>
                        </div>
                    </div>

                </div>
        </div>

    )
}

export default Singlepost;