import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Slider, Slide, Caption } from 'react-materialize';

class Home extends React.Component{
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }
    render(){
        return(
            <div className="container">
            <div className="row">
            <div className="col s12 m12 l12 welcome z-depth-2">

            <Slider>
            <Slide>
            <Caption>
            <h3>"Welcome to this<br></br> stupid<br></br>ugly web"</h3>
            <h5 style={{fontFamily:"strude"}}>-vi0letmist-</h5>
            </Caption>
            </Slide>
            <Slide>
            <Caption placement="left">
            <h3>
            Experiment.<br></br>
            Fail.<br></br>
            Learn.<br></br>
            Repeat.<br></br>
            </h3>
            </Caption>
            </Slide>
            <Slide>
            <Caption placement="right">
            <h3>
            "there's more<br></br> to me that<br></br> i have yet to find"
            </h3>
            </Caption>
            </Slide>
            <Slide>
            <Caption>
            <h3>
            "Everyone <br></br>needs help.<br></br>That's the facts."
            </h3>
            </Caption>
            </Slide>
            <Slide>
            <Caption placement="left">
            <h3>
            "People are so stupid.<br></br>They think they've got<br></br>the whole puzzle<br></br>figured out,<br></br>but they're really so far off."
            </h3>
            </Caption>
            </Slide>
            <Slide>
            <Caption placement="right">
            <h3>
            Did you really think<br></br> that you<br></br>could fix me?
            </h3>
            </Caption>
            </Slide>
            <Slide>
            <Caption>
            <h3>
            "And in the end we were<br></br> all just humans.. drunk on the<br></br> idea that love,<br></br>only love,<br></br>could heal our brokenness"
            </h3>
            <h5>
            -Unknown
            </h5>
            </Caption>
            </Slide>
            </Slider>
            
            </div>
            </div>
            </div> 
        )
    }
}

export default Home;