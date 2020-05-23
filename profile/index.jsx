import React from 'react';
import './profile.style.css'
import Heading from './bioHeading'
import Skills from './skills'
import Social from './social'







class Profile extends React.Component{

    // me = {
    //     name : 'Sohan Ahmed',
    //     title : 'Web Developer / Graphics Designer / Freelancer / Entrepreneur'
    // }


    render(){

        return (

            <div className="profile_box">
             
                < Heading name= 'HM Nayem' title= "Web Developer" />
                < Skills skillA= "HTML" skillB="CSS" skillC="Bootstrap" skillD="JavaScript" />
                < Social social1="Faceboock" social2="Twitter" social3="Linkdin" />
            
            </div>

        )
    }
}

export default Profile