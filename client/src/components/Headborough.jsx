import React, {Component} from 'react';

 import {Images, Image} from 'react-bootstrap';

class Headborough extends Component {
  render(){
    return(
      
      <div className="Headborough-div-userinfo"> 
     
     <div className= "HeadBorough-logo-div"> 
              <img src="img/yilp.png" alt="Our logo" className="Borough-logo" /> 
        </div>
          <div className="Userinfo">
                <Image className="Userpic" src="http://imageog.flaticon.com/icons/png/512/27/27825.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" circle /> 
                <p className="username">Username</p>
          </div>
        
          
    </div>
    );
  }
}

export default Headborough;



