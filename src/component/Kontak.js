import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import '../css/kontak.css';

class Kontak extends Component {
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    render() {
        return (
            <body>
                <div className="container">
                    <div class="row">
                        <div class="col s12 welcome">
                                <div id="1" class="col s12">
                                <h1 align="center">Welcome to<br></br>this stupid<br></br>ugly web</h1>
                                </div>
                                <div id="2" class="col s12">Test 2</div>
                                <div id="3" class="col s12">Test 3</div>
                                <div id="4" class="col s12">Test 4</div>
                                <div id="5" class="col s12">Test 5</div>
                                <div id="6" class="col s12">Test 6</div>
                                <div id="7" class="col s12">Test 7</div>
                                <div id="8" class="col s12">Test 8</div>
                                <div id="9" class="col s12">Test 9</div>
                                <div id="10" class="col s12">Test 10</div>
                                <div id="11" class="col s12">Test 11</div>
                                <div id="12" class="col s12">Test 12</div>
                            <ul class="tabs transparent numbs">
                                <li class="tab col s1"><a className="active" href="#1">1</a></li>
                                <li class="tab col s1"><a href="#2" style="color: white;">2</a></li>
                                <li class="tab col s1"><a href="#3">3</a></li>
                                <li class="tab col s1"><a href="#4">4</a></li>
                                <li class="tab col s1"><a href="#5">5</a></li>
                                <li class="tab col s1"><a href="#6">6</a></li>
                                <li class="tab col s1"><a href="#7">7</a></li>
                                <li class="tab col s1"><a href="#8">8</a></li>
                                <li class="tab col s1"><a href="#9">9</a></li>
                                <li class="tab col s1"><a href="#10">10</a></li>
                                <li class="tab col s1"><a href="#11">11</a></li>
                                <li class="tab col s1"><a href="#12">12</a></li>
                            </ul>
                        </div>
                    </div>
                    </div>
            </body>
        );
    }
}

export default Kontak;