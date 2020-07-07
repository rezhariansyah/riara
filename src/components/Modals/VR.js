import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import Model from "../model/Model";

const Vr = (props) => {
  const {
    buttonLabel = "3D Experience",
    className = "modal-lg modal-dialog-centered",
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="mb-3">
      <Button color="warning" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>3D Experience</ModalHeader>
        <ModalBody>
          <Model />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Vr;
