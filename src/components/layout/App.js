import React, { Component } from 'react'
import * as ReactGA from 'react-ga'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'
import { RealidadeAumentada } from '../RealidadeAumentada/RealidadeAumentada'
import { Educativo } from '../RealidadeVirtual/Educativo/Educativo'
import { JogosPublicitarios } from '../RealidadeVirtual/JogosPublicitarios/JogosPublicitarios'
import { Serios } from '../RealidadeVirtual/Serios/Serios'
import { Maquetes } from '../RealidadeVirtual/Maquetes/Maquetes'
import { Promocoes } from '../RealidadeVirtual/Promocoes/Promocoes'
import { Privacidade } from '../Privacidade/Privacidade'
import { RealidadeVirtual } from '../RealidadeVirtual/RealidadeVirtual'
import { Three60 } from '../360/360'
import { Fotos } from '../360/Fotos/Fotos'
import { Videos } from '../360/Videos/Videos'
import { AIS } from '../AIS/AIS'
import { VRImageFullWidth } from '../content/VRImageFullWidth/VRImageFullWidth'
import { VRVideo } from '../content/VRVideo/VRVideo'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { Home } from '../Home/Home'
import './App.css';

const history = createBrowserHistory();
history.listen((location, action) => {
  console.log('is it happening ?')
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

function logPageView() {
  console.log('af')
  ReactGA.set({
    page: window.location.pathname + window.location.search
  })

  ReactGA.pageview(window.location.pathname + window.location.search)
}

class App extends Component {

  constructor(props) {
    super(props)
    ReactGA.initialize('UA-92091022-2')
  }

  render() {
    return (
      <BrowserRouter onUpdate={logPageView} history={history}>
        <div className="App">
          <Header />
            <Route exact path="/" component={Home} />
            <Route path="/realidade-aumentada" component={RealidadeAumentada} />
            <Route path="/realidade-virtual" component={RealidadeVirtual} />
            <Route path="/educativo" component={Educativo} />
            <Route path="/jogos-publicitarios" component={JogosPublicitarios} />
            <Route path="/maquetes-digitais" component={Maquetes} />
            <Route path="/jogos-serios" component={Serios} />
            <Route path="/promocoes-turisticas" component={Promocoes} />
            <Route path="/privacidade" component={Privacidade} />
            <Route path="/quem-somos" component={AIS} />
            <Route path="/360" component={Three60} />
            <Route path="/fotos-360" component={Fotos} />
            <Route path="/videos-360" component={Videos} />
            <Route path="/foto/:path" component={VRImageFullWidth}  />
            <Route path="/video/:path" component={VRVideo} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
