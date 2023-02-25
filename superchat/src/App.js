import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyAHC9xBO44neMQ-mV0qycLhkstBdTyLFB4",
  authDomain: "superchat-5ff36.firebaseapp.com",
  projectId: "superchat-5ff36",
  storageBucket: "superchat-5ff36.appspot.com",
  messagingSenderId: "240284687975",
  appId: "1:240284687975:web:ffd6840e29eb7b777d7ec2"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();


function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

export default App;
