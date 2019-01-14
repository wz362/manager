import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore } from 'redux';
import reducers from './reducers';


class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDceGvnkEXjC-5gi8jKkTUFvYfU4EGLDzc',
            authDomain: 'manager-d6f02.firebaseapp.com',
            databaseURL: 'https://manager-d6f02.firebaseio.com',
            projectId: 'manager-d6f02',
            storageBucket: 'manager-d6f02.appspot.com',
            messagingSenderId: '326582697800'
          };

        firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello!
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;