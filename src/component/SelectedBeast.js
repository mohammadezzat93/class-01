import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component{

  render(){
      return(
        <>
          <Modal show={this.props.show} onHide={this.props.handleClose}>

        <Modal.Header closeButton>
          <Modal.Title className="title">{this.props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <img src ={this.props.src} alt={this.props.title} />
          <p className="description">  {this.props.description} </p>
        </Modal.Body>

        <Modal.Footer>

          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
        </>
      );
    }
  }

export default SelectedBeast;