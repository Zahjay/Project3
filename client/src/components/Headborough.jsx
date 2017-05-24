import React, {Component} from 'react';

import {Images, Image} from 'react-bootstrap';

import Toogle from './Toogle.jsx';

class Headborough extends Component {
  render(){
    return(
      
      <div className="Borough-userinfo"> 
        <Image src="/assets/thumbnail.png" circle />
        <p className="username">Username</p>
        <div> 
        <img src="placeholder.png" alt="Our logo" className="Borough-logo" /> 

      </div>
    </div>
    );
  }
}

export default Headborough;



