import React from 'react';
import Main from './component/Main'
import Header from './component/Header'
import Footer from './component/Footer'
import SelectedBeast from './component/SelectedBeast';
import data from './component/Hornedbeast.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
// import unicorn from './image/unicorn.jpg'

class App extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      total: 15
    }
  }

  calTotal = () =>{
    // this.setState({
    //   total : this.state.total - 1
    // })
  }

  show = () =>{
       this.setState({
        visible : true
    });
    return(
      <>
    <SelectedBeast />
    </>
    )
  }

  render() {
    return (
      <>
        <Header />
        {/* <h3>total : {this.state.total}</h3> */}
        <Row xs={1} md={3} className="g-4">
          {data.map(item => {
            return (
              <Main
                title={item.title}
                imgUrl={item.image_url}
                description={item.description}
                sendMethodTotalToMain = {this.calTotal}
                showModel = {this.show}
                
              />
            )
          })}
        </Row>
        <Footer />
      </>

    );
  }
}

export default App;