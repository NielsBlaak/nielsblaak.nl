import React from 'react';
import { Grid } from '@material-ui/core';
import './App.scss';

import firebase from "firebase";
import firestore from "firebase/firestore";
import { setDb } from "./data/setDb";
import { teams } from './data/teams';

import Header from './components/Header';
// import Footer from './components/Footer';

import Home   from './pages/Home';
// import Experience   from './pages/Experience';
import { TussenstandPage }  from './pages/Tussenstand';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import Experience from './components/Experience';

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyBpgJph_yQqEUzKOgjz_uYrCz9qbv2ljm4',
  authDomain: 'nielsblaak.firebaseapp.com',
  projectId: 'nielsblaak'
});

var db = firebase.firestore();

// setDb(db, teams);



const App = () => (
    <div className="App">
      <Grid container>
          <Header />
            <Router>
                <Switch>
					          <Route path="/fifa" >
                        <TussenstandPage />
                    </Route>
					          {/* <Route path="/ervaring">
                        <Experience />
                    </Route> */}
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
