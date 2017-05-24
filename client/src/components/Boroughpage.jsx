import React, {Component} from 'react';

//importing Three options which are Food, Night,Reatil

import Filterstores  from './Filterstores.jsx';

import Headborough from './Headborough.jsx';

import Dropdownfilter from './Dropdownfilter.jsx';

import Storelist from './Storelist.jsx';

import Toogle from './Toogle.jsx';

class Boroughpage extends Component{

  render(){
    return(
        <div>
            <Headborough/>
            <img src="placeholder.png" alt="Main Pic" />
            <Filterstores />
            <Dropdownfilter/>
            <main>
            <Storelist/>
        </main>
      </div>
      
    );
  }
}

export default Boroughpage;
