import Home from './pages/Home';
import TussenStand from './pages/TussenStand';

const routes = [{
    path: '/fifa',
    component: TussenStand,
    exact: true,
}, {
    path: '/',
    component: Home,
    exact: true,
}];

export default routes;
