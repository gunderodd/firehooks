import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from '@firebase/app'
import '@firebase/firestore'
import { FirestoreProvider } from 'react-firestore'

const config = {
    akiKey: '<AIzaSyAoD-MXS8wg2HQEqEshN9Vg05m-36VDtAs>',
    projectId: '<firestoreapp-b6bf6>'
}

firebase.initializeApp(config)



ReactDOM.render(
    <FirestoreProvider firebase={firebase}>
        <App />
    </FirestoreProvider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
