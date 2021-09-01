import React from 'react';
import Main from './component/Main'
import Header from './component/Header'
import Footer from './component/Footer'
import data from './component/Hornedbeast.json';
import SelectedBeast from './component/SelectedBeast'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     show : false,
     title : '',
     imgURL : '',
     description : '',
     data : data
    }
  }
  showModal = () =>{
    this.setState({
     show : true
 });
}
  handleClose = () => {
    this.setState({
        show : false
    });
}

  updateSelectedbeast = (title,src,description) => {
    this.setState({
      title : title,
      src : src,
      description : description
  });
  }

  render() {
    return (
      <>
        <Header />

        <Main
                data={data}
                showModal = {this.showModal}
                updateSelectedbeast={this.updateSelectedbeast}
            
              />
              <SelectedBeast 
                show= {this.state.show}
                handleClose={this.handleClose}
                title={this.state.title}
                src={this.state.src}
                description={this.state.description}
              />

        <Footer />
      </>

    );
  }
}

export default App;