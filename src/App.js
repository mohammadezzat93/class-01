import React from 'react';
import Main from './component/Main'
import Header from './component/Header'
import Footer from './component/Footer'
import data from './component/Hornedbeast.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
// import unicorn from './image/unicorn.jpg'

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Row xs={1} md={3} className="g-4">
        {data.map(item =>{
          return (
            <Main 
            title = {item.title}
            imgUrl = {item.image_url}
            discription = {item.description}
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