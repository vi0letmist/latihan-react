import React from 'react';
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
            <div className="row">
                <div className="col s12 m12 l12 welcome blue-grey lighten-5 z-depth-3">
                    <h1 align="center">Welcome to<br></br>this stupid<br></br>ugly web</h1>
                <div className="subWell">
                    <a className="dropdown-trigger" href="#" data-target="dropdown1"><i className="material-icons more1">more_vert</i></a>
                    <ul id='dropdown1' className='dropdown-content'>
                        <li><a href="#!">one</a></li>
                        <li><a href="#!">two</a></li>
                        <li><a href="#!">three</a></li>
                    </ul>
                </div>
                </div>
        
            </div>
            </div>
                {/* <img src={mukaku} width="90%" className="mukaku"></img> */}
                
                 {/* <div className="row">
                    <div className="col s12 m3 l3 green accent-2">
                    <h2>halaman home</h2>
                    </div>
                    <div className="col s12 m9 l9 green accent-3">
                    <h2>halaman home</h2>
                    </div>
                </div>
            </div> */}
            </body>
        )
    }
}

export default Home;