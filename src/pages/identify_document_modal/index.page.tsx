import React from 'react';

import { Button, Modal } from 'react-bootstrap';

import { DivModelButton } from './index.style';

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
      <Modal.Body>
        <p>“Video KYC” Would Like to Access the Camera</p>
        <p>Required for document and facial capture</p>
      </Modal.Body>
      <Modal.Footer>
        <DivModelButton>
          <Button onClick={onHide}>Don’t allow</Button>
          <Button onClick={onHide}>OK</Button>
        </DivModelButton>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
