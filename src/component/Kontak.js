import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Toast } from 'react-materialize';

class Kontak extends Component {
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    render() {
        return (
            // <body>
                <div className="container">
                    <div class="row z-depth-2">
                            <div className="col s12 m8 l8 kiri">
                            <h3>Any Suggestions?</h3>
                            <div class="row">
                                <div class="input-field col s6">
                                    <input id="your_name" type="text" class="validate"></input>
                                        <label for="your_name">Your Name</label>
                                </div>
                                <div class="input-field col s6">
                                    <input id="your_email" type="text" class="validate"></input>
                                        <label for="your_email">Your Email</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12 m12 l12">
                                    <input id="subject" type="text" class="validate"></input>
                                        <label for="subject">Subject</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <textarea id="message" class="materialize-textarea" data-length="140"></textarea>
                                        <label for="message">Message</label>
                                </div>
                            </div>
                            <Toast options={{html: "sorry, i don't need no suggestion! :p"}}>
                            Send Suggestions
                            </Toast>     
                            </div>
                            <div className="col s12 m4 l4 sideb">
                                <div className="col 12 m12 l12 atas">

                                </div>
                                <div className="col 12 m12 l12 bawah">
                                    <h3>Contact Details</h3>
                                    <p>Mobile/Whatsapp:0823245725<br></br>Email:info@example.com<br></br>Address:A108 Adam Street, NY 535022, USA</p>
                                    
                                </div>
                            </div>
                            
                    </div>
                    </div>
            // </body>
        );
    }
}

export default Kontak;