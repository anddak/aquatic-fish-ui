import Modal from 'react-bootstrap4-modal';
import React from 'react';

class AdvancedSearch extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
    };

    this.handleShow = () => {
      this.setState({ show: true });
    };

    this.handleHide = () => {
      this.setState({ show: false });
    };

}

  render() {
    return (
      <Modal visible={true} onClickBackdrop={this.modalBackdropClicked}>
        <div className="modal-header">
          <h5 className="modal-title">Red Alert!</h5>
        </div>
        <div className="modal-body">
          <p>Enemy vessel approaching!</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={this.onPanic}>
            Panic
          </button>
          <button type="button" className="btn btn-primary" onClick={this.onFirePhasers}>
            Fire phasers
          </button>
        </div>
      </Modal>
    );
  }

}

export default AdvancedSearch;
