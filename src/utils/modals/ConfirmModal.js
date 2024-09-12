import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import "react-quill/dist/quill.snow.css";

const ConfirmModal = ({ isLoading, onSubmit, onClose, children, name }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Modal isOpen={true} toggle={() => onClose()} style={{maxWidth: '460px'}}>
      <ModalHeader toggle={() => onClose()}>{name}</ModalHeader>
      <ModalBody className="pb-3">{children}</ModalBody>
      <ModalFooter className="py-3">
        <button className="btn py-1 btn-danger" onClick={() => onClose()}>
          No
        </button>
        <button
          className="btn py-1 btn-primary btn-sm"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Yes"}
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default ConfirmModal;
