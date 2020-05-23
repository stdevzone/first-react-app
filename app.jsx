import React from 'react'

import Profile from './profile/index';
import Myprops from './props';
// import Bio from './profile/bioHeading'
// import Skills from './profile/skills';
// import Social from './profile/social';

import Nav from './nav/index';
import BannerSec from './nav/banner';
import PostCard from './postcard/index';
import Cards from './card/Cards';

class App extends React.Component{
    render(){
        return(  
             <div className="App">
                   {/* <Profile /> */}
                
                   {/*
                    <div style={{marginTop: '70px', marginBottom: '30px'}}>
                       <h3 style={{marginBottom: '20px'}}>List of Programmer</h3>
                      
                       <p>MR. X</p>
                       <Skills skillA= "JavaScript" skillB="jQuery" skillC="Reactjs" skillD="Nodejs" />
                       < Social social1="Faceboock" social2="Twitter" social3="Instagram" />
                       
                       <p>MR. Y</p>
                       <Skills skillA= "M-Office" skillB="M-Power-Point" skillC="Graphics Design" skillD="HTML" /> 
                       < Social social1="Faceboock" social2="Pinterest" social3="Linkdin" />
                    </div>  */
                    }
                 
                    < Nav />
                    < BannerSec />
                                      
                    < PostCard />
                    <Cards/>
                    
             </div>
            
        )
    }
}

export default App 