import React, {Component} from 'react';

class Dropdownfilter extends Component{
  render(){
    return(
        <form>
          <label>
            Sorted by: Best Match
            <select defaultValue="Most Reviewed">
              <option value="Most Reviewed">Most Reviewed</option>
              <option value="Highest Rated">Highest Rated</option>
              <option value="Price">Price</option>
            </select>
          </label>
        </form>
    );
  }
 }

 export default Dropdownfilter;

