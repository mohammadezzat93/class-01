import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component{

    show() {
        this.setState({
            visible : true
        });
    }

    handleClose() {
        this.setState({
            visible : false
        });
    }

    render(){
      return(
        <>
          <Modal show={this.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.imgUrl}</Modal.Body>
        <Modal.Body>{this.props.description}</Modal.Body>
        <Modal.Footer>

            
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
        </>
      );
    }
  }

export default SelectedBeast;