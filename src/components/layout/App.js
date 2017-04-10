import React, { Component } from 'react';
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'
import { RealidadeAumentada } from '../RealidadeAumentada/RealidadeAumentada'
import { RealidadeVirtual } from '../RealidadeVirtual/RealidadeVirtual'
import { Three60 } from '../360/360'
import { AIS } from '../AIS/AIS'
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'
import { Home } from '../Home/Home'
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Header />
          <Route exact path="/" component={Home} />
          <Route path="/realidade-aumentada" component={RealidadeAumentada} />
          <Route path="/realidade-virtual" component={RealidadeVirtual} />
          <Route path="/quem-somos" component={AIS} />
          <Route path="/360" component={Three60} />
        <Footer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
