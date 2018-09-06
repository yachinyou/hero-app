import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Hero.css';
import Animation from '../../images/animation-long.gif';

class Hero extends Component {

    constructor(props) {
        super(props);
      }

    render() {
        return(
            <div className="hero">
                <div className="container">
                    <div className="hero-value" >
                        <h1>Beautiful Designer Mockups in Minutes</h1>
                        <h6>Easily create stunning device mockups for your design presentations.</h6>
                        <Button className="create-mockup-button-top" href={process.env.PUBLIC_URL + '/downloadthankyou?utm_source=facebook&utm_medium=cpc&utm_campaign=top_button'}><span className="bold">Create Mockup</span><br />$3.99 / download</Button>
                        <img src={Animation} clat="solve ux challenges in the real world" />
                    </div>
                </div>
                <Button className="create-mockup-button-bottom" href={process.env.PUBLIC_URL + '/downloadthankyou?utm_source=facebook&utm_medium=cpc&utm_campaign=bottom_button'}><span className="bold">Create Mockup</span><br />$3.99 / download</Button>
            </div>
        );
    }
}

export default Hero;