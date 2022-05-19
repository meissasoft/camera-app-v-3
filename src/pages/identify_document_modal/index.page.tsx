import React from 'react';

import { Button, Modal, Row } from 'react-bootstrap';

import { BodyModalStyled, IineModel, ParagraphModel, ParagraphTextModel } from './index.style';

/**
 *
 * @returns Verification document page
 */

interface Props {
  show?: boolean;
  onHide: any;
}

function MyVerticallyCenteredModal({ show, onHide }: Props) {
  return (
    <Modal show={show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
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
          <Row>
            <>
              <div className="col-6">
                <Button onClick={onHide}>Don’t allow</Button>
              </div>
              <div className="col-6">
                <Button onClick={onHide}>OK</Button>
              </div>
            </>
          </Row>
        </Modal.Footer>
      </BodyModalStyled>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
