import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

class Kontak extends Component {
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    render() {
        return (
            // <body>
                <div className="container">
                    <div class="row">
                        <div class="col s12 welcome">
                                <div id="1" class="col s12">
                                <h1 align="center">Welcome to<br></br>this stupid<br></br>ugly web</h1>
                                </div>
                                <div id="2" class="col s12">
                                <h1 align="center">Take my hand<br></br>and give a reason<br></br>to start again</h1>
                                </div>
                                <div id="3" class="col s12">
                                <h1 align="center">Secret don't sleep<br></br>till they're took<br></br>to the grave</h1>
                                </div>
                                <div id="4" class="col s12">
                                <h1 align="center">Ask no questions<br></br>and you get<br></br>no lies</h1>
                                </div>
                                <div id="5" class="col s12">
                                <h1 align="center">Did you really<br></br>think that you<br></br>could fix me?</h1>
                                </div>
                                <div id="6" class="col s12">
                                <h1 align="center">Even hell can<br></br>get comfy once<br></br>you've settled in</h1>
                                </div>
                                <div id="7" class="col s12">
                                <h1 align="center">Should i sink<br></br>or swim?<br></br>or simply disappear?</h1>
                                </div>
                                <div id="8" class="col s12">
                                <h1 align="center">we're<br></br>gonna<br></br>die</h1>
                                </div>
                                <div id="9" class="col s12">
                                <h1 align="center">no one's<br></br>gonna<br></br>save you</h1>
                                </div>
                                <div id="10" class="col s12">
                                <h1 align="center">What doesn't kill you<br></br>make you wish<br></br>you were dead</h1>
                                </div>
                                <div id="11" class="col s12">
                                <h1 align="center">There is a hell<br></br>believe me<br></br>i've seen it</h1>
                                </div>
                                <div id="12" class="col s12">
                                <h1 align="center">There is a heaven<br></br>let's keep<br></br>it a secret</h1>
                                </div>
                                <div className="numbs">
                            <ul class="tabs transparent">
                            <li class="tab col s1"><a className="active" href="#1" style={{ color:"white"}}>1</a></li>
                                <li class="tab col s1"><a href="#2" style={{color:"white"}}>2</a></li>
                                <li class="tab col s1"><a href="#3" style={{color:"white"}}>3</a></li>
                                <li class="tab col s1"><a href="#4" style={{color:"white"}}>4</a></li>
                                <li class="tab col s1"><a href="#5" style={{color:"white"}}>5</a></li>
                                <li class="tab col s1"><a href="#6" style={{color:"white"}}>6</a></li>
                                <li class="tab col s1"><a href="#7" style={{color:"white"}}>7</a></li>
                                <li class="tab col s1"><a href="#8" style={{color:"white"}}>8</a></li>
                                <li class="tab col s1"><a href="#9" style={{color:"white"}}>9</a></li>
                                <li class="tab col s1"><a href="#10" style={{color:"white"}}>10</a></li>
                                <li class="tab col s1"><a href="#11" style={{color:"white"}}>11</a></li>
                                <li class="tab col s1"><a href="#12" style={{color:"white"}}>12</a></li>
                            </ul>
                                </div>
                        </div>
                    </div>
                    </div>
            // </body>
        );
    }
}

export default Kontak;