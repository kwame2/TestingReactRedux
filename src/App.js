import React from 'react';
import Header from './component/header';
import './app.scss';
import Headline from './component/headline';
import './app.scss';


function App() {
  return (
    <div className="App">
      <Header/>
      <section className="main">
        <Headline header="Posts" desc="Please hit the button to show the details"/>
      </section>
    </div>
  );
}

export default App;
