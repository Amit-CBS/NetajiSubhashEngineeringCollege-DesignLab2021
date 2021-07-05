import React, { Component } from 'react';
import Filter from './Filter';

export default class ResultList extends Component {
   constructor(props){
      super(props);

      this.state = {
        QuantityLaptop: '',
        QuantityPrinter: '',
        QuantityMouse: '',
        QuantityKeyboard: ''
      };
    }
    handleParentData = (formModel) => {
      console.log(formModel);

      this.setState({...formModel});
    }
  render() {
    var a=100000;
    var b=10000;
    var c=2000;
    var d=5000;
    var q1=this.state.QuantityLaptop;
    var q2=this.state.QuantityPrinter;
    var q3=this.state.QuantityMouse;
    var q4=this.state.QuantityKeyboard;
    var sum=a*Number(q1)+b*Number(q2)+c*Number(q3)+d*Number(q4);
    return (
        <div  className="container">

          <Filter handleData={this.handleParentData}/><br/>
          <p>{"Quantity of laptop="+q1}</p>
          <p>{"Quantity of printer="+q2}</p>
          <p>{"Quantity of mouse="+q3}</p>
          <p>{"Quantity of keyboard="+q4}</p>
          <p className="teamNameID home-container">{"You have to pay Rs. "+sum}</p>  
          {/* <p>{this.state.myPrice1}</p> */}
        
        </div>
    )
  }
}