import React from 'react';
import Main from './component/Main'
import Header from './component/Header'
import Footer from './component/Footer'
import Form from './component/Form'
import data from './component/Hornedbeast.json';
import SelectedBeast from './component/SelectedBeast'
import 'bootstrap/dist/css/bootstrap.min.css';
// import './main.scss'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: '',
      imgURL: '',
      description: '',
      data: data,
      selectedItem: data,
    }
  }

  showModal = () => {
    this.setState({
      show: true,
    });
  }

  handleClose = () => {
    this.setState({
      show: false,
    });
  }

  updateSelectedbeast = (title, src, description) => {
    this.setState({
      title: title,
      src: src,
      description: description

    });
  }

  submitHandler = e => {

    this.setState({
      selectedItem: this.state.data.filter(item => {
        if (item.horns === parseInt(e.target.value)) {
          return item;
        }
        else if (e.target.value === 'All') {
          return item;
        }
        return false;
      }
      )
    });
  }

  render() {
    return (
      <>
        <Header />

        <Form submitHandler={this.submitHandler} />

        <Main
          data={this.state.selectedItem}
          showModal={this.showModal}
          updateSelectedbeast={this.updateSelectedbeast}
        />

        <SelectedBeast
          show={this.state.show}
          handleClose={this.handleClose}
          title={this.state.title}
          src={this.state.src}
          description={this.state.description}
          data={this.state.selectedData}
        />

        <Footer />
      </>

    );
  }
}

export default App;