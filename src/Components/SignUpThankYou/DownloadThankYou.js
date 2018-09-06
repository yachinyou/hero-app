import React, { Component } from 'react';
import './SignUpThankYou.css';
import ThankYouImage from '../../images/thank-you-animation.gif';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class DownloadThankYou extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="container thank-you">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-2 col-sm-12 col-12"></div>
                    <div className="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12">
                        <h2>We're still hard at work on bringing HERO to you!</h2>
                        <h6>Thank you for checking out HERO. <br /><span className="bold">We are launching HERO in Winter 2018</span>. <br />Sign up and get early access before the official launch!</h6>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-2 col-sm-12 col-12"></div>
                </div>
                <div className="form-container">
                    <form action="https://uxchallenge.us2.list-manage.com/subscribe/post" method="POST">
                        <Input type="hidden" name="u" value="7cdd3e7148bfb13d3deb11a50" />
                        <Input type="hidden" name="id" value="3bc24473ea" />    
                        <Input className="email-input float-left" type="email" autocapitalize="off" autocorrect="off" name="MERGE0" id="MERGE0" size="25" placeholder="Your Email"/>
                        <Button type="submit" className="float-left">Get early access</Button>
                    </form>
                </div>
                <div className="thank-you-image-container">
                    <img src={ThankYouImage} alt="we are hard at work to bring ux challenge to you!" />
                </div>
            </div>
        );
    }

}

export default DownloadThankYou;