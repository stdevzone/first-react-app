import React from 'react';
import  Bannerimg from './images/banner2.jpg'

class BannerSec extends React.Component{

    render(){
        return(

            <section id="banner">
            <div className="banner">
                <img src= {Bannerimg} alt=""/>
            </div>
            </section>
        )
    }
}

export default BannerSec;