import React, {Component} from 'react';

import Storecontent from './Storecontent.jsx';

class Storelist extends Component{
  render(){
    return(
      <div className="Storelist">
      <div className="Inner-div-store-content">
      <Storecontent/>
      </div>
      </div>
    );
  }
}

export default Storelist;