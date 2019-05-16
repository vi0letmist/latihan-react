import React, {Component} from 'react';
import axios from 'axios';
import ava from '../Images/1.jpg';
import CardProduct from "./CardProduct";

class Portofolio extends React.Component {
    state = {
        persons: []
      }
    
      componentDidMount() {
        axios.get(`https://my-json-server.typicode.com/vi0letmist/latihan_pwa_api/mahasiswa`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }
    
      render() {
        return (
            <body>
            <div className="container">
            <div className="row">
            <div className="col s12 m12 l12 welcome blue-grey lighten-5 z-depth-3">
            
      
      <ul>
            { this.state.persons.map(person =>
                <div class="col s12 m4 l4">
                    <div class="card-panel grey lighten-5 z-depth-1">
                        <div class="row valign-wrapper">
                            <div class="col s2">
                                <img src={ava} alt="" class="circle" width="40px"></img>
                            </div>
                        <div class="col s10">
                            <span class="black-text">
                                {person.name}
                            </span>
                        </div>
                    </div>
                </div>
            </div>)}
          </ul>
            
            {/* <ul>
            { this.state.persons.map(person => <li>{person.name}</li>)}
          </ul> */}
          </div>
            </div>
            </div>
            </body>
          
        )
      }
    }

export default Portofolio;