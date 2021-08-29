import React from 'react';
import Unicorn_and_Narwhal_by_dinglehopper from './Unicorn_and_Narwhal_by_dinglehopper.jpg';
import rhino from './rhino.jpg';
import unicorn from './unicorn.jpg';
import Main from './component/Main'
import Header from './component/Header'
import Footer from './component/Footer'

class App extends React.Component{
  render(){
    return(
      <>
       <Header/>
       <table>
        <Main title="UniWhal" />        
        <div className="unicorn">
          <img src={Unicorn_and_Narwhal_by_dinglehopper} width="400" height="400" />
        </div>

        <Main discription="A unicorn and a narwhal nuzzling their horns" />
</table>

<table>
        <Main title="Rhino Family" />
        <img src={rhino} width="400" height="400" />
        <Main discription="A unicorn and a narwhal nuzzling their horns" />
        </table>

        <table>
        <Main title="Unicorn Head" />
        <img src={unicorn} width="400" height="400" />

        <Main discription="Someone wearing a creepy unicorn head mask" />
        </table>
        <hr></hr>
        
        <Footer />
        
      </>
    );
  }
}

export default App;