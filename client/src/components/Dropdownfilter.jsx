import React, {Component} from 'react';

class Dropdownfilter extends Component{
  render(){
    return(
        <form>
          <label>
            Sorted by: Top Rated
            <select>
              <option value="Restuarant">Restuarant</option>
              <option value="Retail">Retail</option>
              <option selected value="Nightlife">Nightlife</option>
            </select>
          </label>
        </form>

    );
  }
 }

 export default Dropdownfilter;

