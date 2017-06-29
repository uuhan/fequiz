import React                    from 'react';
import { render }               from 'react-dom';
import {
    Router,
    Route,
    useRouterHistory,
    Redirect,
}                               from 'react-router';
import { createHashHistory }    from 'history';

// redux init
import { applyMiddleware }      from 'redux';
import { Provider }             from 'react-redux';
import storeConfig              from './store';

import '../styles/app';

// TODO views
import Mainpage                 from './views/Mainpage';

class Main {
    constructor(entry) {
        // mount point
        this.entry = entry;

        // router managment
        this.history = useRouterHistory(createHashHistory)({
            queryKey: false
        });

        // state management
        this.store = storeConfig();

        // ready to roll
        this.operator();
    }
    operator() {
        render(
            <Provider store={this.store}>
                <Router history={this.history}>
                    <Route path='/' component={Mainpage}>
                        <Route path="error" component={Errorpage}>
                          <Route path='404' component={Notfoundpage}/>
                        </Route>
                    </Route>
                    <Redirect from="*" to='/error/404'/>
                </Router>
            </Provider>, this.entry
        );
    }
}

export default new Main(document.querySelector('#point'));
