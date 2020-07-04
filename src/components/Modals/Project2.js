import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import img1 from "../../assets/projects/papiton-duwa.png";
import "./ProjectModal.css";

const Project4 = (props) => {
  const { buttonLabel = "VIEW PROJECT", className = "modal-lg modal-dialog-centered" } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="mb-5">
      <Button color="warning" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>PAPITON DUWA</ModalHeader>
        <ModalBody>
          <div className="text-center">
            <img src={img1} alt="..." className="anjani-image" />
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Project4;
