/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
} from 'react-native';
import AppReducer from './src/reducers';
import AppNavState from './src/routers/AppNavigator'
import {Provider} from 'react-redux'
import { createStore } from 'redux'

class App extends Component<{}> {

    store = createStore(AppReducer);

    render() {
        return (
            <Provider store={this.store} >
                <AppNavState/>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
