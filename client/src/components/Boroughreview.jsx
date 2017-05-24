import React, {Component} from 'react';

import 
{Tabs,
  Tab} from 'react-bootstrap';

class Boroughreview extends Component{
  render(){
    return(
      <div>
       <h1>Testing</h1>
         <nav>
               <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Food"> Restaurant Content</Tab>
                <Tab eventKey={2} title="Night"> Night Life</Tab>
                <Tab eventKey={3} title="Retail">Shopping Locations</Tab>
              </Tabs>
            </nav>
      </div>
    );
  }
}
export default Boroughreview;