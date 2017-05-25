import React, {Component} from 'react';
import {ButtonToolbar, ButtonGroup} from 'react-bootstraps';
import {Button} from 'react-bootstraps';

class Boroughreview extends Component{
render(){
    return(
      <div className="BoroughReview-div">
      <div> 
        <h2>Review</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        <div>

          <ButtonToolbar>
            <ButtonGroup>
              <Button>Submit Review</Button>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </ButtonGroup>
          </ButtonToolbar>
          
        </div>
      </div>
    );
  }
}

export default Boroughreview; 