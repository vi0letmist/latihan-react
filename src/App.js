import React, {Component} from 'react';
import './App.css';
import Main from "./component/Main";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Navbar, NavItem } from 'react-materialize';

import {Link} from 'react-router-dom';


class App extends Component {
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    render() {
        return (
             <div>
                 <Navbar brand={<a />} className="transparent z-depth-0 nav-center">
                     <NavItem className="transparent"><Link to="/home" className="txtNav" style={{fontFamily:"moonllime"}}>Home</Link></NavItem>
                     <NavItem className="transparent"><Link to="/profile" className="txtNav" style={{fontFamily:"moonllime"}}>Profile</Link></NavItem>
                     <NavItem className="transparent"><i class="large material-icons center" style={{color:"#212121"}}>cancel</i></NavItem>                     
                     <NavItem className="transparent"><Link to="/portofolio" className="txtNav" style={{fontFamily:"moonllime"}}>Portofolio</Link></NavItem>
                     <NavItem className="transparent"><Link to="/kontak" className="txtNav" style={{fontFamily:"moonllime"}}>Kontak</Link></NavItem>
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