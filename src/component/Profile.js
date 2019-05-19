import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import {Carousel } from 'react-materialize';
import gumbur from '../Images/3.png';
import ava from '../Images/1.jpg';

class Profile extends Component {
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    render() {
        return (
        <div className="container">
          <div className="row">
            <div className="col s12 m4 l4 sidea z-depth-2 center">
              <h3 className="nameu">Jaffar<br></br>Jatmiko Jati</h3>
            </div>
            <div className="col s12 m8 l8 kanan z-depth-2">
              <div class="col s12 m12 l12">
                <ul class="tabs transparent">
                  <li class="tab col s3"><a class="active" href="#test1" style={{color:"#212121"}}>Info Umum</a></li>
                  <li class="tab col s4"><a href="#test2" style={{color:"#212121"}}>Academic History</a></li>
                  <li class="tab col s5"><a href="#test4" style={{color:"#212121"}}>Hobbies & Interest</a></li>
                </ul>
              </div>
                <div id="test1" class="col s12">Test 1</div>
                <div id="test2" class="col s12">Test 2</div>
                <div id="test4" class="col s12">Test 4</div>
            </div>
          </div>
        </div>
    
        );
    }
}

export default Profile;