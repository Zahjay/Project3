import React, {Component} from 'react';

class Header extends Component{
  render(){
    return(
      <div className="userName"> 
        <img/>
        <p> User Name </p> 
        <img src={logo} className="App-logo" alt="YILP" />
        <div className="iconRightSide"> </div>
      </div>
    );
  }
}

export default Header;

