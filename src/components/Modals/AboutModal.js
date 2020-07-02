import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import "./AboutModal.css";

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
        <ModalHeader toggle={toggle}>OUR VISION AND MISSION</ModalHeader>
        <ModalBody>
          <div className="mission-vission-wrapper align-items-center">
            <div className="row mission-vission-desc">
              <div className="col-md-6">
                <h3 className="title-mission">Mission</h3>
                <p>
                  Helping our customer to build the boat they want, white
                  developing solutions to preserve the environment.
                </p>
                <p>
                  How do we develop solutions for environment ? <br />
                  First we have to identify the wood needs of each project then
                  we plant the wood seedlings according to the needs that we
                  use. Environmentally responsible and sustainable solutions.
                </p>
              </div>
              <div className="col-md-6">
                <h3 className="title-mission">Vission</h3>
                <p>
                  we believe the value of history is something that must be
                  preserved. <br />
                  "Phinisi" must be preserved as a culture to maintain thir
                  majesty in the future. Likewise with the environment. <br />
                  We believe our children and grandchildren have a right to
                  enjoy the earth and it's natural environtment. Together, let
                  us strive to be good stewards of the earth's resources and
                  stress conservation of resources where possible
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
