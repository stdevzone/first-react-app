import React from 'react'
import './nav.style.css'

import  logo from './images/st.png'
import NavLinks from './navlinks'
import Searchbox from './searchbox'
 

class Nav extends React.Component {

  


    render(){
        return (

            <div className="heading_wrap">
       
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">

                            <a className="navbar-brand" href="#"><img src= {logo} alt=""/></a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"><i class="fas fa-bars"></i></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <NavLinks />
                                <Searchbox />
                            </div>

                        </div>
                    </nav>
              
                    
            </div>              
         
        )
    }
}

export default Nav;