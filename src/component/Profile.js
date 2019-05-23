import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { SocialIcon } from 'react-social-icons';
import { Collapsible,CollapsibleItem } from 'react-materialize';
import bola from '../Images/football.png';
import coding from "../Images/coding.png";
import vidiogim from '../Images/game-controller.png';
import headset from '../Images/quaver.png';

class Profile extends Component {
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    render() {
        return (
        <div className="container">
          <div className="row z-depth-2">
            <div className="col s12 m4 l4 sidea center">
              <h3 className="nameu">Jaffar<br></br>Jatmiko Jati</h3>
              <div className="social">
                <SocialIcon url="http://twitter.com/jaffarjjati"></SocialIcon>
                <SocialIcon url="http://facebook.com/jaffar40"></SocialIcon>
                <SocialIcon url="http://github.com/vi0letmist"></SocialIcon>
                <SocialIcon url="http://instagram.com/jaffarjjati"></SocialIcon>
              </div>
            </div>
            <div className="col s12 m8 l8 kanan">
              <div class="col s12 m12 l12">
                <ul class="tabs transparent">
                  <li class="tab col s3"><a class="active" href="#test1" style={{color:"#212121"}}>Info Umum</a></li>
                  <li class="tab col s4"><a href="#test2" style={{color:"#212121"}}>Academic History</a></li>
                  <li class="tab col s5"><a href="#test4" style={{color:"#212121"}}>Hobbies & Interest</a></li>
                </ul>
              </div>
                <div id="test1" class="col s12">
                  <p>Place, Date of Birth: Bantul, 19 Juni 1999<br></br>Gender: Male<br></br>Nationality: Indonesia<br></br>Religion: Islam</p>
                </div>
                <div id="test2" class="col s12">
                <Collapsible className="z-depth-1 transparent">
                  <CollapsibleItem header="SDN 1 Brajan" icon="child_care">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </CollapsibleItem>
                  <CollapsibleItem header="SMPN 2 Kasihan" icon="face">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </CollapsibleItem>
                  <CollapsibleItem header="SMKN 1 Sedayu" icon="laptop_windows">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </CollapsibleItem>
                  <CollapsibleItem header="Universitas Gadjah Mada" icon="school">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </CollapsibleItem>
                </Collapsible>
                </div>
                    <div id="test4" class="col s12">
                      <div className="row interis z-depth-1">
                      <div className="col s12 m6 l6 misal1 center">
                        <a className="modal-trigger" href="#modal1"><img src={bola} alt="bola" width="200px" className="responsive-img"></img></a>
                      </div>
                      <div className="col s12 m6 l6 misal2 center">
                      <a className="modal-trigger" href="#modal2"><img src={coding} alt="coding" width="200px" className="responsive-img"></img></a>
                      </div>
                      <div className="col s12 m6 l6 misal2 center">
                      <a className="modal-trigger" href="#modal3"><img src={vidiogim} alt="vidiogim" width="200px" className="responsive-img"></img></a>
                      </div>
                      <div className="col s12 m6 l6 misal1 center">
                      <a className="modal-trigger" href="#modal4"><img src={headset} alt="listenTo" width="200px" className="responsive-img"></img></a>
                      </div>
                      </div>
                    </div>
                              <div id="modal1" class="modal bottom-sheet">
                                <div class="modal-content">
                                    <h4>Playing Football</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                  </div>
                                  <div class="modal-footer poter">
                                  <b>-vi0letmist-</b> 
                                  </div>
                                </div>
                                <div id="modal2" class="modal bottom-sheet">
                                <div class="modal-content">
                                    <h4>Some Coding Stuff</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                  </div>
                                  <div class="modal-footer poter">
                                  <b>-vi0letmist-</b> 
                                  </div>
                                </div>
                                <div id="modal3" class="modal bottom-sheet">
                                <div class="modal-content">
                                    <h4>Video Game, love it</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                  </div>
                                  <div class="modal-footer poter">
                                  <b>-vi0letmist-</b> 
                                  </div>
                                </div>
                                <div id="modal4" class="modal bottom-sheet">
                                <div class="modal-content">
                                    <h4>Listening to Music like in heaven</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                  </div>
                                  <div class="modal-footer poter">
                                  <b>-vi0letmist-</b> 
                                  </div>
                                </div>
            </div>
          </div>
        </div>
    
        );
    }
}

export default Profile;