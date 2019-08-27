import React    from 'react';
import { Grid } from '@material-ui/core';
import '../scss/header.scss';

const Header = () => (
    <Grid item xs={12}>
        <div className="header">
            <h1>Niels Blaak</h1>
        </div>
    </Grid>
);

export default Header;