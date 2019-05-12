import React, {Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Main from "./component/Main";
import simsons from "./Images/simsons.png";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Button, Card, Row, Col, Navbar, NavItem } from 'react-materialize';


class App extends Component {
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    render() {
        return (
             <div>
                 <Navbar brand={<a />} className="transparent z-depth-0 nav-center">
                     <NavItem href="/home">Home</NavItem>
                     <NavItem href="/profile">Profile</NavItem>
                     <NavItem><i class="large material-icons center">cancel</i></NavItem>                     
                     <NavItem href="/portofolio">Portofolio</NavItem>
                     <NavItem href="/kontak">Kontak</NavItem>
                 </Navbar>
                 <p><Main/></p>
             </div>
            
  // <nav>
  //   <div className="nav-wrapper">
  //     <a href="#" className="brand-logo">Logo</a>
  //     <ul id="nav-mobile" class="right hide-on-med-and-down">
  //       <li><a href="sass.html">Sass</a></li>
  //       <li><a href="badges.html">Components</a></li>
  //       <li><a href="collapsible.html">JavaScript</a></li>
  //     </ul>
  //   </div>
  // </nav>
        
        
            //// <div>
            //     <AppBar position="static">
            //     <Link to="/home">Home</Link>
            //     <Link to="/profile">Profile</Link>
            //     <Link to="/portofolio">Portofolio</Link>
            //     <Link to="/kontak">Kontak</Link>
            //     </AppBar>
            //     <p><Main/></p>
                
            // </div>
        );
    }
}

export default App;