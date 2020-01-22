import React    from 'react'
import { Grid } from '@material-ui/core';
import '../scss/footer.scss';

const Footer = () => (
    <Grid item xs={12}>
        <div className="footer">
            <p>LinkedIn: <a href="https://www.linkedin.com/in/niels-blaak-2a1219b7/">Niels Blaak</a></p>
        </div>
    </Grid>
);

export default React.memo(Footer);