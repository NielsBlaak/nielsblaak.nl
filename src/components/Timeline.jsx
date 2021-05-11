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
                    date="september 2015 - februari 2016"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Hatsa!</h3>
                    <p>
                        werkzaam als developer bij het socialshoppingplatform <a href="https://www.hatsa.com">Hatsa!</a>
                    </p>
            </VerticalTimelineElement>
            {/* <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="september 2015 - februari 2016"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">2de stage periode</h3>
                    <p>
                        Opnieuw stage gelopen bij OOShopping.nl
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="september 2015 - februari 2016"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Werken bij OOShopping.nl</h3>
                    <p>
                        Na mijn eerste stage periode bij OOShopping.nl ben ik daar werkzaam gebleven in de dagen waarop ik niet naar school ging.
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="september 2015 - februari 2016"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">1ste stage periode</h3>
                    <p>
                        Stage gelopen bij OOShopping.nl
                    </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2014 - 2017"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">MBO Opleiding</h3>
                    <p>
                        MBO Opleiding Applicatie en mediaontwikkeling aan de Techniek college Rotterdam.
                    </p>
            </VerticalTimelineElement> */}
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