import React, {Component} from 'react';
import BarBAr from "./ButtonAppBar";
import '../css/profile.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Button, Card, Row, Col, Navbar, NavItem, Carousel } from 'react-materialize';
import gumbur from '../Images/3.png';
import ava from '../Images/1.jpg';
import 'materialize-social/materialize-social.css';
import 'materialize-social/materialize-social.less';
class Profile extends Component {
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    render() {
        return (
        <div className="container">
        <div className="row">
        <div class="col s12 m4 l4 z-depth-3 sidea">
                  <div id="profile-card" class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                      <img class="activator" src={gumbur} alt="user bg"></img>
                    </div>
                    <div class="card-content cyan lighten-5">
                      <img src={ava} width="70px" alt="" class="circle responsive-img activator card-profile-image cyan lighten-1 padding-2"></img>
                      <a class="btn-floating activator btn-move-up waves-effect waves-light red accent-2 z-depth-4 right">
                        <i class="material-icons">edit</i>
                      </a>
                      <span class="card-title activator grey-text text-darken-4">Arya Stark</span>
                      <p>
                        <i class="material-icons">account_circle</i> CEO</p>
                      <p>
                        <i class="material-icons">chat</i> +6289121313457</p>
                      <p>
                        <i class="material-icons">local_post_office</i> uglyweb@mail.com</p>
                        
                    </div>
                    <div class="card-reveal light-blue lighten-5">
                      <span class="card-title grey-text text-darken-4">Roger Waters
                        <i class="material-icons right">close</i>
                      </span>
                      <p>Here is some more information about this card.</p>
                      <p>
                        <i class="material-icons">perm_identity</i> Project Manager</p>
                      <p>
                        <i class="material-icons">perm_phone_msg</i> +1 (612) 222 8989</p>
                      <p>
                        <i class="material-icons">email</i> yourmail@domain.com</p>
                      <p>
                        <i class="material-icons">cake</i> 18th June 1990
                      </p>
                      <p>
                      </p>
                      <p>
                        <i class="material-icons">airplanemode_active</i> BAR - AUS
                      </p>
                      <p>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col s12 m8 l8 kanan z-depth-3">
                <Carousel images={[
    'https://picsum.photos/200/300?image=0',
    'https://picsum.photos/200/300?image=1',
    'https://picsum.photos/200/300?image=2'
  ]} />
                </div>
                </div>
              </div>
    
        );
    }
}

export default Profile;