import React, {Component} from 'react';
import 
{Tabs,
  Tab} from 'react-bootstrap';
  import {TabContent} from 'react-bootstrap';
  import {Navtabs} from 'react-bootstrap';
 
// The code for this was borowed from stack overflow. 
class Mixedtab extends Component{
  render(){
    return(
        <div>
     
            <div className="tab-content">
                <div id="home" className="About us">
                  <h3>About Us</h3>
                  <p>Some content.</p>
                </div>
                <div id="menu1" className="tab-pane fade">
                  <h3>Store Info</h3>
                  <p> Info on Individual Store</p>
                </div>
                <div  className="tab-pane fade">
                  <h3>Borough Review</h3>
                  <p> Put a component here </p>
                </div>
              </div>


              <ul className="nav nav-tabs"eventKey={3}>
                <li className="active"><a data-toggle="tab" href="#About-us" eventKey={1}>About Us</a></li>
                <li ><a data-toggle="tab" href="#Store-info" eventKey={2}>Store Info</a></li>
                <li><a data-toggle="tab" href="#Borough-review" eventKey={3}> Borough Review </a></li>
              </ul> 
        </div>
    );
  }
}
export default Mixedtab;