import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import img1 from "../../assets/projects/popup-princess-hemelly.jpg";

const AboutModal = (props) => {
  const { buttonLabel = "MISSION AND VISSION", className = "modal-lg" } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="mb-3">
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
            Established in 2020 in Bira, Indonesia, Riara Indonesia traces its
            history building quality ships. Riara provides shipbuilding
            solutions for Phinisi Boad & Fiberglass Boat. Our qualified and
            experienced in-house design and engineering team, as well as modern
            production, and quality check. We offer high grade products and
            services in new shipbuilding, remodeling, and design interior
          </p>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AboutModal;
