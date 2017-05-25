import React, {Component} from 'react';

class Dropdownfilter extends Component{
  render(){
    return(
        <form>
          <label>
            Sorted by: Best Match
            <select>
              <option value=" Most Reviewed"> Most Reviewed </option>
              <option value="Higest Rated"> Higest Rated </option>
              <option selected value="Price"> Price </option>
            </select>
          </label>
        </form>

    );
  }
 }

 export default Dropdownfilter;

