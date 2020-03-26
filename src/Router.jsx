import React               from 'react';

import { Route, Switch }   from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import routes              from './routes';

class Router extends React.Component {

    render() {
        return (
            <ConnectedRouter>
                <Switch>
                    {routes.map((route, key) => <Route key={route.path || key} {...route} />)}
                </Switch>
            </ConnectedRouter>
        );
    }
}

export default Router;