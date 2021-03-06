import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
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
        <ModalHeader toggle={toggle}>PAPITON LOPI</ModalHeader>
        <ModalBody>
          <div className="text-center">
            <img src="https://res.cloudinary.com/dewnmhir6/image/upload/v1595228345/riara/projects/papiton-modal_oh6gr8.jpg" alt="..." className="anjani-image" />
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Project4;
