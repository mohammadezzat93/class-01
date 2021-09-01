import React from 'react';
import Main from './component/Main'
import Header from './component/Header'
import Footer from './component/Footer'

class App extends React.Component {

  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>

    );
  }
}

export default App;