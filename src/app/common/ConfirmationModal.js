import React from "react";
import { Modal, Header, Button } from "semantic-ui-react";

const ConfirmationModal = ({
  header,
  description,
  open,
  onConfirm,
  onCancel,
  onClose
}) => {
  const modalStyle = {
    width: "85%"
  };

  return (
    <Modal basic size="mini" open={open} onClose={onClose} style={modalStyle}>
      <Header content={header} />
      <Modal.Content>
        <p>{description}</p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="red" onClick={onCancel} inverted>
          No
        </Button>
        <Button basic color="green" onClick={onConfirm} inverted>
          Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ConfirmationModal;
