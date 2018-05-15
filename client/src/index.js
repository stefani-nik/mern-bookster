import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createBrowserHistory} from 'history';
import {syncHistoryWithStore} from 'react-router-redux';
import {BrowserRouter} from 'react-router-dom';
import configureStore from './store/configureStore';
import App from './containers/App';
import registerServiceWorker from './utils/registerServiceWorker';

const store = configureStore();
const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
    <Provider store={store} history={history}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
