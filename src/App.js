import React from 'react';
import { Grid } from '@material-ui/core';
import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Timeline from './components/Timeline';
// import Experience from './components/Experience';

const App = () => (
    <div className="App">
      <Grid container>
        <Header />
        <Timeline />
        {/* <Experience /> */}
        <Footer />
      </Grid>
    </div>
);

export default App;
