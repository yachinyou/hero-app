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

//Update Google analytics
// import ReactGA from 'react-ga';
// ReactGA.initialize('UA-648673-27');
// ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <ReactTitle title="HERO app" />
          <Route path={process.env.PUBLIC_URL + '/'} component={NavBar} />
          <Route path={process.env.PUBLIC_URL + '/'} exact component={Hero} />
          <Route path={process.env.PUBLIC_URL + '/thankyou'} exact component={ThankYou} />
          <Route path={process.env.PUBLIC_URL + '/about'} exact component={AboutPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
