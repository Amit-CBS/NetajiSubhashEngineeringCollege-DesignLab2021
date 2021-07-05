import React, { Component } from 'react';

export default class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      QuantityLaptop: '',
      QuantityPrinter: '',
      QuantityMouse: '',
      QuantityKeyboard: ''
    };
  }

  submitForm = e => {
    e.preventDefault();
    this.props.handleData(this.state);
  };

  handleQuantityLaptopChange= e => {
    this.setState({QuantityLaptop: e.target.value});
  };
  handleQuantityPrinterChange= e => {
    this.setState({QuantityPrinter: e.target.value});
  };
  handleQuantityMouseChange= e => {
    this.setState({QuantityMouse: e.target.value});
  };
  handleQuantityKeyboardChange= e => {
    this.setState({QuantityKeyboard: e.target.value});
  };
  // handleQuantityChange = e => {
  //   console.log(e.target.value);
  //   this.setState({
  //     QuantityLaptop: e.target.value,
  //     QuantityPrinter:  e.target.value,
  //     QuantityMouse: e.target.value,
  //     QuantityKeyboard:  e.target.value
  //   });
  // };

    // setUser({...user, [myQuantity1]:value})

//   handlePriceChange = e => {
//     this.setState({
//       price: e.target.value
//     });
//   };

  render() {
  // const PostData=async(e)=>{
  //   e.preventDefault();
  //   const {myQuantity1}=user;
  //   const res=await fetch("/backend",{
  //     method: "POST",
  //     headers: {
  //       "Content-Type":"application/json"
  //     },
  //     body:JSON.stringify({
  //       myQuantity1
  //     })
  //   });
  //   const res1=await res.json();
  //   if(res1.status===422 || !data){
  //     window.alert("WRONG");
  //     console.log("WRONG");
  //   }else {
  //     window.alert("RIGHT");
  //     console.log("RIGHT");
  //     // history.push("/login");
  //   }
  // }
    return (
      <div className="container">
<div className="container team-container text-center">
  <div className="container"> 
      <form method="POST">
    <div className="row">
      <h1>Shopping cart</h1>
      <div className="col-5 teamCol teamName teamCardUp teamCardLeft">
          Product: Laptop<br/>Price Rs. 100000{' '} <br />
        <img
          className="teamPic"
          src="https://images.unsplash.com/photo-1542393545-10f5cde2c810?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=401&q=80"  
          alt="Avatar"
        ></img>
          {/* {PostData}/> */}
      </div>
      <div className="col-1"></div>
      <div className="col-5 teamCol teamName teamCardUp teamCardRight">
          Product: Printer<br/>Price Rs. 10000{' '} <br />
        <img
          className="teamPic"
          src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"  
          alt="Avatar"
        ></img>
          {/* {PostData}/> */}
      </div>
    </div>
    <div className="row">
      <div className="col-5 teamCol teamCardDown teamCardLeft teamNameID">
      Laptop Quantity:{' '}
          <input type="number" placeholder="0" name="QuantityLaptop" value={this.state.QuantityLaptop} onChange={this.handleQuantityLaptopChange}/>
      </div>
      <div className="col-1"></div>
      <div className="col-5 teamCol teamCardDown teamCardRight teamNameID">
        Printer Quantity:{' '}
            <input type="number" placeholder="0" name="QuantityPrinter" value={this.state.QuantityPrinter} onChange={this.handleQuantityPrinterChange}/>
      </div>
    </div>
    <div className="row">
      <div className="col-5 teamCol teamName teamCardUp teamCardLeft">
          Product: Mouse<br/>Price Rs. 2000{' '} <br />
        <img
          className="teamPic"
          src="https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80"  
          alt="Avatar"
        ></img>
      </div>
      <div className="col-1"></div>
      <div className="col-5 teamCol teamName teamCardUp teamCardRight">
          Product: Keyboard<br/>Price Rs. 5000{' '} <br />
        <img
          className="teamPic"
          src="https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1492&q=80"  
          alt="Avatar"
        ></img>
      </div>
    </div>
    <div className="row">
      <div className="col-5 teamCol teamCardDown teamCardLeft teamNameID">
        Mouse Quantity:{' '}
            <input type="number" placeholder="0" name="QuantityMouse" value={this.state.QuantityMouse} onChange={this.handleQuantityMouseChange}/>  {/* onChange={this.handleQuantityChange} /> */}
      </div>
      <div className="col-1"></div>
      <div className="col-5 teamCol teamCardDown teamCardRight teamNameID">
        Keyboard Quantity:{' '}
            <input type="number" placeholder="0" name="QuantityKeyboard" value={this.state.QuantityKeyboard} onChange={this.handleQuantityKeyboardChange}/>
      </div>
    </div>

    <input type="button" className="MyButton" value="Check Out" onClick={this.submitForm} />
    </form>
  </div>
</div>
      </div>
    );
  }
}