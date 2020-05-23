import React from 'react';
import Card from './CardUI';
import './card.style.css'

import cardimg1 from '../nav/images/card1.jpg'
import cardimg2 from '../nav/images/card2.jpg'
import cardimg3 from '../nav/images/card3.jpg'

class Cards extends React.Component{
    render(){
        return(
        <div id="card_section">
                <div className="abs"><h1>Another Blog</h1></div>

          <div className="container d-flex justify-content-center">
              <div className="row">   

                    <div className="col-md-4">
                       <Card 
                       imgsrc={cardimg1} 
                       title={'This is post title'}
                       text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id adipisci amet deleniti qui reiciendis aut suscipit dolor veritatis consequatur omnis!'}
                       />                      
                    </div>

                    <div className="col-md-4">
                       <Card 
                       imgsrc={cardimg2} 
                       title={'This is post title'}
                       text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id adipisci amet deleniti qui reiciendis aut suscipit dolor veritatis consequatur omnis!'}
                       />                      
                    </div>

                    <div className="col-md-4">
                       <Card 
                       imgsrc={cardimg3} 
                       title={'This is post title'}
                       text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id adipisci amet deleniti qui reiciendis aut suscipit dolor veritatis consequatur omnis!'}
                       />                       
                    </div>

                    <div className="col-md-4">
                       <Card 
                       imgsrc={cardimg3} 
                       title={'This is post title'}
                       text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id adipisci amet deleniti qui reiciendis aut suscipit dolor veritatis consequatur omnis!'}
                       />                       
                    </div>
                   
                    <div className="col-md-4">
                       <Card 
                       imgsrc={cardimg3} 
                       title={'This is post title'}
                       text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id adipisci amet deleniti qui reiciendis aut suscipit dolor veritatis consequatur omnis!'}
                       />                       
                    </div>
                    
                    <div className="col-md-4">
                       <Card 
                       imgsrc={cardimg3} 
                       title={'This is post title'}
                       text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id adipisci amet deleniti qui reiciendis aut suscipit dolor veritatis consequatur omnis!'}
                       />                       
                    </div>

                   

              </div>
          </div>

        </div>
        );
    }
}

export default Cards;