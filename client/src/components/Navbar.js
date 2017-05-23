import React, {Component} from 'react';

class Navbar extends Component{
 render(){
  return(
   <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login"> Log In</Link></li>
  );
 }
}
export default Navbar;