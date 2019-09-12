const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');

module.exports = withCss(
  withSass({
    serverRuntimeConfig: {
      apiKey: 'AIzaSyAGgYmng_f35zIiR1Kq5MYFJZ59cQXm5sk',
      authDomain: 'iventy.firebaseapp.com',
      databaseURL: 'https://iventy.firebaseio.com',
      projectId: 'iventy',
      storageBucket: '',
      messagingSenderId: '450983222478',
      appId: '1:450983222478:web:edf47721edfed916'
    }
  })
);
