import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import img1 from "../../assets/projects/popup-princess-hemelly.jpg";

const Project5 = (props) => {
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
          <img src={img1} alt="..." className="about-image-1" />
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

export default Project5;
