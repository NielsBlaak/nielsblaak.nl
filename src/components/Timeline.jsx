import React from 'react';
import { 
    VerticalTimeline, 
    VerticalTimelineElement 
}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Grid } from '@material-ui/core';

const Timeline = () => (
    <Grid item xs={12}>
        <VerticalTimeline animate={true}>
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="mei 2018 - heden"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Hatsa!</h3>
                    <p>
                        Werkzaam als developer bij <a href="https://www.hatsa.com">Hatsa!</a>
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="1997 - nu"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Inspiratie opdoen voor deze website</h3>
                <p>
                    Op een dag komen op deze website mooie projecten te staan. Voor nu moet je het doen met deze saaie tekst.
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </Grid>
);

export default React.memo(Timeline);