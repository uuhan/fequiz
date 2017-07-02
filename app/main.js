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

// TODO: views
import Mainpage                 from './views/Mainpage';
import Errorpage                from './views/Errorpage';
import Notfoundpage             from './views/Notfoundpage';

class Main {
    constructor(entry) {
        // mount point
        this.entry = entry;

        // state management
        this.store = storeConfig({
            // initial value: an example article
            items: [{
                /** @type {string} */
                url: 'http://placekitten.com/g/1600/900',
                /** @type {string} */
                title: 'An Example',
                /** @type {string} */
                content: 'Dolor proident quis cillum anim ea officia anim ex culpa minim occaecat et.' +
                         ' Irure laborum dolore consequat voluptate nulla magna Lorem ad.' +
                         ' Ex sunt enim officia id consequat occaecat. Aute tempor in laboris dolore' +
                         ' mollit in id culpa culpa amet veniam pariatur nisi. Esse reprehenderit' +
                         ' ut amet et minim eiusmod officia eu. Deserunt Lorem ea eiusmod esse.' +
                         ' Et quis est consectetur Lorem ad tempor duis quis voluptate aliqua occaecat ipsum.'
            }]
        });

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
                                    {/* TODO: more error pages */}
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
