import React                    from 'react';
import { render }               from 'react-dom';
import {
    Router,
    Layout,
    Route,
    Redirect,
}                               from 'react-router';
import { HashRouter }           from 'react-router-dom';

// redux init
import { applyMiddleware }      from 'redux';
import { Provider }             from 'react-redux';
import storeConfig              from './store';

// import '../styles/app';

// TODO views
import Mainpage                 from './views/Mainpage';
import Errorpage                from './views/Errorpage';
import Notfoundpage             from './views/Notfoundpage';

class Main {
    constructor(entry) {
        // mount point
        this.entry = entry;

        // state management
        this.store = storeConfig();

        // ready to roll
        this.operator();
    }
    operator() {
        render(
            <Provider store={this.store}>
                <HashRouter>
                    <Layout>
                        <Route path='/' component={Mainpage}>
                            <Route path="error" component={Errorpage}>
                              <Route path='404' component={Notfoundpage}/>
                            </Route>
                        </Route>
                        <Redirect from="*" to='/error/404'/>
                    </Layout>
                </HashRouter>
            </Provider>, this.entry
        );
    }
}

export default new Main(document.querySelector('#point'));
