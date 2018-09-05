import React, { Component } from 'react';
import placementImage from '../../images/placement_img.png';
import './SellSheet.css';

class SellSheet extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="sell-sheet">
                <div className="container">
                    <div className="row sell-section">
                        <div className="sell1-image col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                            <img src={placementImage} clat="solve ux challenges in the real world" />
                        </div>
                        <div className="sell-text col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12" >
                            <h2>Get your problem solved now</h2>
                            <h6>Get your problem solved now without going through reading or diagnosis.</h6>
                        </div>
                    </div>
                    <div className="row sell-section">
                        <div className="sell2-image col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                            <img src={placementImage} clat="solve ux challenges in the real world" />
                        </div>
                        <div className="sell-text col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12" >
                            <h2>Get exactly the solution you need</h2>
                            <h6>Not hints, not pointers. Get exactly the solution you need.</h6>
                        </div>
                    </div>
                    <div className="row sell-section">
                        <div className="sell3-image col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                            <img src={placementImage} clat="solve ux challenges in the real world" />
                        </div>
                        <div className="sell-text col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12" >
                            <h2>Expert solution</h2>
                            <h6>Experienced trusted team members provide you with expert solution.</h6>
                        </div>
                    </div>
                </div>    
            </div>    
        );
    }
}

export default SellSheet;