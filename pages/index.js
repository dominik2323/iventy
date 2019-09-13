import { Fragment } from 'react';
import Head from 'next/head';
import getConfig from 'next/config';
import firebase from 'firebase';
import 'firebase/firestore';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Header from '../components/Header';
import Services from '../components/Services';
import Team from '../components/Team';
import Pricing from '../components/Pricing';
import References from '../components/References';
import Insta from '../components/Insta';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Circle from '../components/Circle';
import '../scss/index.scss';

export const DataContext = React.createContext();

export default function Index(props) {
  const { data } = props;
  return (
    <DataContext.Provider value={data}>
      <Head>
        <title>Iventy</title>
      </Head>
      <div className="c">
        <Navbar />
        <Hero />
        <Circle size={`small`} color={`dark-blue`} side={`left`} y={-300} />
        <Header
          header={data.intro.header}
          paragraph={data.intro.paragraph}
          id={`intro`}
        />
        <Services />
        <Team />
        <Circle size={`large`} color={`light-blue`} side={`left`} y={0} />
        <Pricing />
        <Circle size={`large`} color={`dark-blue`} side={`right`} y={-600} />
        <References />
        <Circle size={`small`} color={`red`} side={`left`} y={-600} />
        <Contact />
        <Circle size={`small`} color={`orange`} side={`right`} y={-800} />
        <Insta />
        <Footer />
        <div className={`mask-circle`}>
          <Circle size={`small`} color={`yellow`} side={`left`} />
        </div>
      </div>
    </DataContext.Provider>
  );
}

Index.getInitialProps = async function() {
  const { serverRuntimeConfig: serverVars } = getConfig();
  console.log(process.env.apiKey);
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      databaseURL: process.env.databaseURL,
      projectId: process.env.projectId,
      storageBucket: process.env.storageBucket,
      messagingSenderId: process.env.messagingSenderId,
      appId: process.env.appId
    });
  }
  const contentRef = firebase.firestore().collection('content');
  const contentSnapshot = await contentRef.get();
  let data;
  const contentData = contentSnapshot.forEach(task => (data = task.data()));
  return { data: data };
};
