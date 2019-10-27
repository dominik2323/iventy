import React from 'react';
import App from 'next/app';
import firebase from 'firebase';
import 'firebase/firestore';

class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  async componentDidMount() {
    let firebaseConfig;
    if (false) {
      // const devConfig = await import(`../config/config.js`);
      // firebaseConfig = devConfig.default;
    } else {
      return {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DATABASE_URL,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID
      };
    }
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    const contentRef = firebase.firestore().collection('content');
    const contentSnapshot = await contentRef.get();
    let data;
    const contentData = contentSnapshot.forEach(task => (data = task.data()));
    this.setState({ data: data });
  }
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} data={this.state.data} />;
  }
}

export default MyApp;
