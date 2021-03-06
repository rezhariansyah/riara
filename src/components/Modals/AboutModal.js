import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import "./AboutModal.css";

const AboutModal = (props) => {
  const {
    buttonLabel = "MISSION AND VISSION",
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
        <ModalHeader toggle={toggle}>OUR VISION AND MISSION</ModalHeader>
        <ModalBody>
          <div className="mission-vission-wrapper align-items-center mission-vission-desc pt-5">
            <div className="row " style={{ fontFamily: "orpheuspro, serif" }}>
              <div className="col-md-6">
                <h3 className="title-mission">Mission</h3>
                <p>
                  Helping our customers to build the boat they want, white
                  developing solutions to preserve the environment.
                </p>
                <p>How do we develop solutions for environment ?</p>
                <p>
                  We have to identify the wood needs of each project then we
                  plant the wood seedlings according to the needs that we use.
                  Environment responsible and sustainable solutions.
                </p>
              </div>
              <div className="col-md-6">
                <h3 className="title-mission">Vission</h3>
                <p>
                  We believe the value of history is something that must be
                  preserved. <br />
                  "Phinisi" must be preserved as a culture to maintain their
                  majesty in the future. Likewise with the environment. <br />
                  We believe our children and grandchildren have a right to
                  enjoy the earth and its natural environment. Together, let us
                  strive to be good stewards of the earth's resources and stress
                  conservation of resources where possible
                </p>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AboutModal;
