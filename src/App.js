import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
