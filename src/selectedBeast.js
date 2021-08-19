import { Component } from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends Component {
  render(){
    return(
      <>
        <Modal show={this.props.show} onHide={this.props.onClose} size='lg'>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.props.image_url} alt={this.props.keyword}></img>
            <p>{this.props.description}</p>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
