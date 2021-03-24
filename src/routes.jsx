import Home from './pages/Home';
import TussenStand from './pages/TussenStand';
import Euro from './pages/EK';

const routes = [{
    path: '/fifa',
    component: TussenStand,
    exact: true,
}, {
    path: '/ek',
    component: Euro,
    exact: true,
}, {
    path: '/',
    component: Home,
    exact: true,
}];

export default routes;
