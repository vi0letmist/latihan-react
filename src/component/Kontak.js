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
            <div>
                <h3 className="center">KONTAK</h3>
            </div>
            </body>
        );
    }
}

export default Kontak;