import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../app/store'; //Import the store
import Home from '../app/components/home' //Import the component file
import { Navigator } from '../app/navigation/Navigator'
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Navigator />
            </Provider>
        );
    }
}