import React, {Component} from 'react';

class Storecontent extends Component{
  render(){
    return(
      <div className="Div-Storecontent">
      <div>

      <section className="Store-content-pics">
       <img src="http://www.danielarestaurant.com/images/pnp2.jpg" alt="Pic from api" /> 
       </section>

       <div classname="Store-content-text">
       <h2> 100 BroadwayStreet, New York, NY</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>

        </div>

      </div>
    );
  }
}

export default Storecontent;