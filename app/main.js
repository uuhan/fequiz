import React                    from 'react';
import { render }               from 'react-dom';
import {
    Switch,
    Route,
    Redirect,
}                               from 'react-router';
import { HashRouter }           from 'react-router-dom';

// redux init
import { Provider }             from 'react-redux';
import storeConfig              from './store';

import '../styles/app';

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
                    <Switch>
                        <Route exact path="/" component={Mainpage}/>
                        <Route path="/error" component={() => {
                            return (
                                <Errorpage>
                                    <Route path='/error/404' component={Notfoundpage}/>
                                    {/* TODO more error pages */}
                                </Errorpage>
                            );
                        }}/>
                        <Redirect to='/error/404'/>
                    </Switch>
                </HashRouter>
            </Provider>, this.entry
        );
    }
}

export default new Main(document.querySelector('#point'));
