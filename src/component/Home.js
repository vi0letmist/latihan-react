import React from 'react';
import BarBAr from "./ButtonAppBar";
import '../css/home.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

class Home extends React.Component{
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    render(){
        return(
            <body>
            <div className="container">
                <div className="col s12 m12 l12 center">
                <h1>HALAMAN HOME</h1>
                </div>
                {/* <img src={mukaku} width="90%" className="mukaku"></img> */}
                
                {/* <div className="row">
                    <div className="col s12 m6 l6 green accent-2">
                    <h1>halaman home</h1>
                    </div>
                    <div className="col s12 m6 l6 green accent-3">
                    <h1>halaman home</h1>
                    </div>
                </div> */}
            </div>
            </body>
        )
    }
}

export default Home;