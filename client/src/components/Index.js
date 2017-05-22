import React, {Component} from 'react';

class Index extends Component{

  constructor(props) {
  super(props);
  this.state = {value: 'Queens'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(event){
   this.setState({value: event.target.value});
}
 
 handleSubmit(event) {
    alert('The borough you selected is: ' + this.state.value);
    event.preventDefault();

 }
  render(){
    return(
      <div>
          <h1> YILP </h1>
          <form className="DropDown" onSubmit={this.handleSubmit}>
            <label>
             
    <select value={this.state.value} onChange = {this.handleChange}>
                  <option value="Queens>">Queens</option>
                  <option value="Brooklyn"> Brooklyn</option>
                  <option value="Manhattan"> Manhattan</option>
                  <option value="Bronx"> Bronx</option>
                  <option value="Staten Island"> Staten Island</option>
                </select>
              </label>
            <input type="submit" value="submit"/>
          </form>
          <div>Current Borough: {this.state.value}</div>
      </div>
    );
  }
}

export default Index;