import Modal from "react-modal";
import React from "react";

const ModalInfo = (props: any) => {
  const { isOpen, setIsOpen, children } = props;
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <button onClick={closeModal} className="close-button">X</button>
      {children}
    </Modal>
  );
};

export default ModalInfo;
