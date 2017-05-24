import React, {Component} from 'react';

//importing Three options which are Food, Night,Reatil

import Filterstores  from './Filterstores.jsx';

import Headborough from './Headborough.jsx';


class Boroughpage extends Component{

  render(){
    return(
        <div>
            <Headborough/>
            <Filterstores />
            <main>
            <form onSubmit={this.handleSubmit}>
          <label>
            Sorted by: Top Rated
            <select>
              <option value="Restuarant">Restuarant</option>
              <option value="Retail">Retail</option>
              <option selected value="Nightlife">Nightlife</option>
            </select>
          </label>
        </form>
        <div className="Boroughpage-content-rendered"> 
         <h3> Restaurant Name</h3>
         <h2>100 BroadwayStreet, New York, NY</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>

         <div> 
         <h3> Restaurant Name</h3>
         <h2>100 BroadwayStreet, New York, NY</h2>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </div>

         <div> 
         <h3> Restaurant Name</h3>
         <h2>100 BroadwayStreet, New York, NY</h2>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </div>


        </main>
      </div>
      
    );
  }
}

export default Boroughpage;
