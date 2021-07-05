// import logo from './logo.svg';
import './App.css';
// import {  NavDropdown, MenuItem, Form, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';

function App() {
  return (
  <div className="container" style={{width:"180%"}}>
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light" style={{"border-bottom":"1px grey solid"}}>
      <img style={{width: "40px"}}
        className="teamPic"
        src="https://udaan.com/images/udaan_logo.a32459e30db9c15750d09e15e1f0ba8f.png"
        alt="Avatar"
      ></img>
      <a className="navbar-brand" href="#">Udaan</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span></button>
      <div className="collapse navbar-collapse MyNav" id="navbarSupportedContent">
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search for products" aria-label="Search"/>
        </form>
        <ul className="navbar-nav mr-auto MyNav0">
          <li className="nav-item active ItemsPad">
            <a className="nav-link" href="#"><strong>About</strong><span className="sr-only"></span></a>
          </li>
          <li className="nav-item ItemsPad">
            <a className="nav-link" href="#"><strong>Download App</strong></a>
          </li>
        </ul>
        <button className="btn ItemsPad btn-outline-danger my-2 my-sm-0" type="submit">Login</button>
      </div>
    </nav>
    
    <div className="banner" style={{"text-align": "center"}}>
      <img style={{width: "60px"},{"margin-left":"50%"}}
        className="teamPic"
        src="https://udaan.com/images/notch.c69471fc6952906ce89974628364884f.png"
        alt="Avatar"
      ></img>
      <p className="cat00" style={{"font-size":"8px"},{"margin-left":"50%"}}>CATEGORIES</p>
      <p className="cat" style={{"margin-left":"10%"}}><strong>More than <span style={{color: "red"}}>5 Lakh</span> products</strong></p>
      </div><div>
      <div className="row">
        <div className="col-4">
          <div className="row hovering goLeft">
            <div className="col-3">
              <img style={{width: "90px"}}
                  className="teamPic"
                  src="https://udaan.azureedge.net/assets/ewhvm3n9ctk2palc7nre.png"
                  alt="Avatar"
              ></img>
            </div>
            <div className="col-9">
              <p className="row cat10" >Electronics & Appliances</p>
              <p className="row subs">Mobiles Accessories, IT & Accessories,<br/> COVID Essentials, Appliances, Smartphones</p>
            </div>
          </div>
          <div className="row hovering goLeft">
            <div className="col-3">
              <img style={{width: "90px"}}
                  className="teamPic"
                  src="https://udaan.azureedge.net/assets/ytb416yrb4uyl53wmwtx.png"
                  alt="Avatar"
              ></img>
            </div>
            <div className="col-9">
              <p className="row cat10">Clothing & Accessories</p>
              <p className="row subs">Women's Garments, Men's Garments,<br/> Women's Ethnic, Women's Western, Kid's Garments</p>
            </div>
          </div>
          <div className="row hovering goLeft">
            <div className="col-3">
              <img style={{width: "90px"}}
                  className="teamPic"
                  src="https://udaan.azureedge.net/assets/r7jle9jva3f6hdp81dda.png"
                  alt="Avatar"
              ></img>
            </div>
            <div className="col-9">
              <p className="row cat10">Luggage & Backpacks</p>
              <p className="row subs">Luggage & Backpacks, COVID Essentials</p>
            </div>
          </div>
          <div className="row hovering goLeft">
            <div className="col-3">
              <img style={{width: "90px"}}
                  className="teamPic"
                  src="https://udaan.azureedge.net/assets/ovz6eb05u2j82knrax96.png"
                  alt="Avatar"
              ></img>
            </div>
            <div className="col-9">
              <p className="row cat10">Food</p>
              <p className="row subs">Food - Staples, FMCG,<br/> Fruits & Vegetables, Meat</p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row hovering goLeft">
            <div className="col-3">
              <img style={{width: "90px"}}
                  className="teamPic"
                  src="https://udaan.azureedge.net/assets/vnnhza6trtob5dfvsd6l.png"
                  alt="Avatar"
              ></img>
            </div>
            <div className="col-9">
              <p className="row cat10">Medicines</p>
              <p className="row subs">Medicines, OTC/FMCG,<br/> Generics, Ethicals, Medical Devices</p>
            </div>
          </div>
          <div className="row hovering goLeft">
            <div className="col-3">
              <img style={{width: "90px"}}
                  className="teamPic"
                  src="https://udaan.azureedge.net/assets/27hm0s6pd9lw5dxbbs8w.png"
                  alt="Avatar"
              ></img>
            </div>
            <div className="col-9">
              <p className="row cat10">Home & Kitchen</p>
              <p className="row subs">COVID Essentials, Steel Aluminium Copper Utensils,<br/> Appliances, Kitchen And Dining, Cleaning & Bathroom</p>
            </div>
          </div>
          <div className="row hovering goLeft">
            <div className="col-3">
              <img style={{width: "90px"}}
                  className="teamPic"
                  src="https://udaan.azureedge.net/assets/mlekkys9molzkstbv75i.png"
                  alt="Avatar"
              ></img>
            </div>
            <div className="col-9">
              <p className="row cat10">Footwear</p>
              <p className="row subs">Footwear</p>
            </div>
          </div>
          <div className="row hovering goLeft">
            <div className="col-3">
              <img style={{width: "90px"}}
                  className="teamPic"
                  src="https://udaan.azureedge.net/assets/m62b8m2bum8bdzma8z0f.png"
                  alt="Avatar"
              ></img>
            </div>
            <div className="col-9">
              <p className="row cat10">Toys, Baby & Sports</p>
              <p className="row subs">Cycles, Toys and Baby Gear,<br/>Baby Gear, Sports & Fitness Gear, Cycles, Toys</p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row hovering goLeft">
            <div className="col-3">
              <img style={{width: "90px"}}
                  className="teamPic"
                  src="https://udaan.azureedge.net/assets/2inu4v2r998l0pvdiiwi.png"
                  alt="Avatar"
              ></img>
            </div>
            <div className="col-9">
              <p className="row cat10">Electrical</p>
              <p className="row subs">Switch & Switch Accessories, Lights & Light Accessories,<br/> Wires, Electrical Accessories</p>
            </div>
          </div>
          <div className="row hovering goLeft">
            <div className="col-3">
              <img style={{width: "90px"}}
                  className="teamPic"
                  src="https://udaan.azureedge.net/assets/r1wk52f0c7rt4fi95wt3.png"
                  alt="Avatar"
              ></img>
            </div>
            <div className="col-9">
              <p className="row cat10">Fulfillment Material</p>
              <p className="row subs">Fulfillment Material</p>
            </div>
          </div>
        </div>
      </div>
  </div>
  <div className="steps" style={{"text-align":"center"}}>
      <img style={{width: "90px"}}
          className="teamPic"
          src="https://udaan.com/images/notch.c69471fc6952906ce89974628364884f.png"
          alt="Avatar"
      ></img>
      <p className="cat0"><strong>Start trading in 3 simple steps</strong></p>
      <img style={{width: "1300px"},{"margin-bottom":"20px"}}
          className="teamPic"
          src="pic0.png"
          alt="Avatar"
      ></img>
    <button className="btn RegisterButton btn-danger my-2 my-sm-0" type="submit">Register <i class="fas fa-arrow-right"></i></button>

  </div>
    <div class="row"  style={{"margin-top":"50px"}}>
      <div class="col-5">
      <img style={{width: "90px"}}
          className="teamPic"
          src="https://udaan.com/images/notch.c69471fc6952906ce89974628364884f.png"
          alt="Avatar"
      ></img>
        <p style={{color: "grey"}}><strong>WELCOME TO UDAAN</strong></p>
        <p className="cat1"><strong>Buy stocks for your shop/business easily</strong></p>

      <video width="400" autoplay muted>
        <source src="/video.mp4" type="video/mp4"/>
        Your browser does not support HTML video.
      </video>
      </div>
      <div class="col-7">
        <div className="row">
          <div class="col-6">
            <p className="cat00"><strong>Great <span style={{color: "red"}}>wholesale</span> prices</strong></p>
            <p className="subs"><strong>Avail best prices on 5 Lakh+ top quality products</strong></p>
          </div>
          <div class="col-6"></div>
        </div>
        <div className="row">
          <div class="col-6"></div>
          <div class="col-6">
            <p className="cat00"><strong>Quick <span style={{color: "red"}}>doorstep delivery</span></strong></p>
            <p className="subs"><strong>Get delivery of your orders at your doorstep</strong></p>
          </div>
        </div>
        <div className="row">
          <div class="col-6">
            <p className="cat00"><strong>Wide range from top <span style={{color: "red"}}>sellers & brands</span> </strong></p>
            <p className="subs"><strong>Shop from 25,000 top sellers across India</strong></p>
          </div>
          <div class="col-6"></div>
        </div>
        <div className="row">
          <div class="col-6"></div>
          <div class="col-6">
            <p className="cat00"><strong>Credit upto <span style={{color: "red"}}>₹5 <br/> Lakhs</span></strong></p>
            <p className="subs"><strong>Shop from 25,000 top sellers across India</strong></p>
          </div>
        </div>
        <div className="row">
          <div class="col-6">
            <p className="cat00"><strong>Smart <span style={{color: "red"}}>returns</span></strong></p>
            <p className="subs"><strong>Enjoy simple & hassle-free returns process</strong></p>
          </div>
          <div class="col-6"></div>
        </div>
      </div>
    </div>
</div>
  ); 
}
export default App;