import React from 'react';
import axios from 'axios';
import { SocialIcon } from 'react-social-icons';
import p1 from '../Images/p1.webp';

class Portofolio extends React.Component {
  
    state = {
        persons: []
      }
    
      componentDidMount() {
        axios.get(`https://my-json-server.typicode.com/vi0letmist/portofolio/portfolio`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }
    
      render() {
        return (
            
            <div className="container">
            <div className="row">
            <div className="col s12 m12 l12 welcome blue-grey lighten-5 z-depth-3">

          <ul>
            { this.state.persons.map(person =>
              <div className="col s12 m4 l4 cardio">    
                <div class="card">
                  <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src={p1} height="335px" alt="backugrun"></img>
                  </div>
                  <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">{person.title}<i class="material-icons right">more_vert</i></span>
                    <SocialIcon url={person.github} width="10px"></SocialIcon>
                    <SocialIcon url="http://trello.com/jaffarjjati" width="10px"></SocialIcon>
                  </div>
                  <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">{person.title}<i class="material-icons right">close</i></span>
                    <p>{person.description}</p>
                  </div>
                </div>
              </div>)}
            </ul>
              
              
      {/* <h2 className="center">test json</h2>
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
          </ul> */}
            
            {/* <ul>
            { this.state.persons.map(person => <li>{person.name}</li>)}
          </ul> */}
          </div>
            </div>
            </div>
            
          
        )
      }
    }

export default Portofolio;