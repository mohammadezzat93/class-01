import React from 'react';
import Main from './component/Main'
import Header from './component/Header'
import Footer from './component/Footer'
import Form from './component/Form'
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
     data : data,
     horned : '',
    }
  }
  showModal = () =>{
    this.setState({
     show : true
 });
}
  handleClose = () => {
    this.setState({
        show : false,
    });
}

  updateSelectedbeast = (title,src,description) => {
    this.setState({
      title : title,
      src : src,
      description : description
      
  });
  }

  submitHandler = e => {
    e.preventDefault();
    
    this.setState({
      horned : e.target.horned.value,
      list : data.json
  });
  }

  horns = e => {

    // e.filter(item =>{
    //   if(item === 'All'){
    //     return true;
    //   }

    if (e.target.horned.value === 1){
      return this.state.data.horns;
    }
    else if (e.target.horned.value === 2){
      return this.state.data.horns;
    }
    else if (e.target.horned.value === 3){
      return this.state.data.horns;
    }
    else {
      return this.state.data.horns;
    }
  }

  render() {
    return (
      <>
        <Header />

       <Form onChange = {this.submitHandler} />

        <Main
                data={data}
                showModal = {this.showModal}
                updateSelectedbeast={this.updateSelectedbeast}
                showhornes = {this.state.horned}
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