import React from 'react';

import { Button, Modal } from 'react-bootstrap';

import { BodyModalStyled, IineModel, ParagraphModel, ParagraphTextModel } from './index.style';

/**
 *
 * @returns Verification document page
 */

interface Props {
  show?: boolean;
  onHide: any;
  onOk?: any;
}

function MyVerticallyCenteredModal({ show, onHide, onOk }: Props) {
  return (
    <Modal className="modal-cont" show={show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <BodyModalStyled>
        <Modal.Body>
          <ParagraphModel>
            “Video KYC” Would Like to
            <br />
            Access the Camera
          </ParagraphModel>
          <ParagraphTextModel>
            Required for document and
            <br /> facial capture
          </ParagraphTextModel>
        </Modal.Body>
        <IineModel />
        <Modal.Footer>
          <div className="col-5">
            <Button onClick={onHide}>Don’t allow</Button>
          </div>
          <div className="col-5 border-left">
            <Button onClick={onOk}>OK</Button>
          </div>
        </Modal.Footer>
      </BodyModalStyled>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
