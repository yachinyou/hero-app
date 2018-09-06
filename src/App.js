import React, { Component } from 'react';
import './App.css';
import { ReactTitle } from 'react-meta-tags';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import SellSheet from './Components/SellSheet/SellSheet';
import Footer from './Components/Footer/Footer';
import ThankYou from './Components/SignUpThankYou/SignUpThankYou';
import AboutPage from './Components/About/About';

// Google Analytics
import ReactGA from 'react-ga';
ReactGA.initialize('UA-648673-28');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <ReactTitle title="HERO app" />
          <Route path="/" component={NavBar} />
          <Route path="/" exact component={Hero} />
          <Route path="/thankyou" exact component={ThankYou} />
          <Route path="/about" exact component={AboutPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
