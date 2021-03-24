import React from 'react';
import { Grid } from '@material-ui/core';
import './App.scss';

import Header from './components/Header';
// import Footer from './components/Footer';

import Home   from './pages/Home';
// import Experience   from './pages/Experience';
import { TussenstandPage }  from './pages/Tussenstand';
import { Euro } from './pages/EK';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import Experience from './components/Experience';

const App = () => (
    <div className="App">
      <Grid container>
          <Header />
            <Router>
                <Switch>
					          <Route path="/fifa" >
                        <TussenstandPage />
                    </Route>
                    <Route path="/ek" >
                        <Euro />
                    </Route>
                    <Route path="/" >
                        <Home />
                    </Route>
                </Switch>
            </Router>
        {/* <Footer /> */}
      </Grid>
    </div>
);

export default App;
