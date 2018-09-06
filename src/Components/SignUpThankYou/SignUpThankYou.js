import React, { Component } from 'react';
import './SignUpThankYou.css';
import ThankYouImage from '../../images/thank-you-animation.gif';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class SignUpThankYou extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="container thank-you">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-2 col-sm-12 col-12"></div>
                    <div className="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12">
                        <h2>You're on HERO's prelaunch list!</h2>
                        <h6><span className="bold">You'll be the first to know when early access is open for HERO.</span><br />We'll be in touch soon!</h6>
                        <h6>In the mean time, if you have any questions, or just want to say hello, please email us at <span className="bold">uxchallengeco(at)gmail(dot)com</span>.</h6>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-2 col-sm-12 col-12"></div>
                </div>
            </div>
        );
    }

}

export default SignUpThankYou;