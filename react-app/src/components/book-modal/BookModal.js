
import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import './BookModal.css';


class BookModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      modalStyle: this.getModalStyle
    }
  }

  
  getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };  
    
  render() {
    return (
      <React.Fragment>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={this.getModalStyle()} className='paper'>
            <h2 id="simple-modal-title">Ofrecer / Solicitar nuevo libro</h2>
            <p id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>      
          </div>
        </Modal>
      </React.Fragment>
      );
    }
}

export default BookModal;