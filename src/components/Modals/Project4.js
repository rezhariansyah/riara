import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import img1 from "../../assets/projects/anjani-voyage.png";
import "./ProjectModal.css";

const Project4 = (props) => {
  const { buttonLabel = "VIEW PROJECT", className = "modal-lg" } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="mb-5">
      <Button color="warning" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>ANJANI</ModalHeader>
        <ModalBody>
          <div className="text-center">
            <img src={img1} alt="..." className="anjani-image" />
          </div>
        </ModalBody>
        <ModalFooter>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            consequatur optio sapiente. Aut mollitia a sequi similique soluta,
            voluptatem nisi optio reiciendis eum cumque quibusdam temporibus
            ducimus labore neque vel!
          </p>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Project4;
