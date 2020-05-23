import React from 'react';
import './postcard.style.css';
import Singlepost from './singlepost';



class PostCard extends React.Component {
     postinfo = {
       Ptitle : 'This is post title',
       Pdescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi consequatur assumenda vitae. Necessitatibus natus odit eaque ducimus culpa facere consectetur vero suscipit sit esse? Nostrum...',
    }
   
    render(){

        return(
            <div className="postWrap">
                <div className="pt"><h1>Recent Blog</h1></div> 
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">

                       < Singlepost Ptitle= {this.postinfo.Ptitle} Pdescription={this.postinfo.Pdescription} />
                       < Singlepost Ptitle= {this.postinfo.Ptitle} Pdescription={this.postinfo.Pdescription} />
                       < Singlepost Ptitle= {this.postinfo.Ptitle} Pdescription={this.postinfo.Pdescription} />
                       < Singlepost Ptitle= {this.postinfo.Ptitle} Pdescription={this.postinfo.Pdescription} />
                 

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default PostCard;