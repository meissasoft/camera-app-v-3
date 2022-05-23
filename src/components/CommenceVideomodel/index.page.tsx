import { Button, Modal } from 'react-bootstrap';
import { CrossIcon } from '@/assets/svg/crossIcon';
import { BodyModalStyled, IineModel, ParagraphModel, ParagraphTextModel } from './index.style';

interface Props {
  show?: boolean;
  onHide: any;
  onOk?: any;
  heading?: any;
  paragraph?: any;
  dontAllow?: any;
  Agree?: any;
  paragraph1?: any;
  paragraph2?: any;
  paragraph3?: any;
  Disagree?: any;
  GreaterThenIcon?: any;
}

function MyCommenceCenteredModal({
  show,
  onHide,
  onOk,
  heading,
  paragraph1,
  paragraph2,
  paragraph3,
  Disagree,
  Agree,
  GreaterThenIcon,
}: Props) {
  return (
    <>
      <Modal className="modal-cont" show={show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <BodyModalStyled>
          <Modal.Header className="box">
            <Modal.Title>User Consent</Modal.Title>
            <CrossIcon />
          </Modal.Header>
          {/* <StyledLine /> */}
          <Modal.Body>
            <ParagraphModel>{heading}</ParagraphModel>
            <div className="row">
              <div className="col-1">
                {' '}
                <GreaterThenIcon />
              </div>
              <div className="col-11">
                {' '}
                <ParagraphTextModel>{paragraph1}</ParagraphTextModel>
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <GreaterThenIcon />
              </div>
              <div className="col-11">
                <ParagraphTextModel>{paragraph2}</ParagraphTextModel>
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <GreaterThenIcon />
              </div>
              <div className="col-11">
                <ParagraphTextModel>{paragraph3}</ParagraphTextModel>
              </div>
            </div>
          </Modal.Body>
          <IineModel />
          <Modal.Footer>
            <div className="col-5">
              <Button onClick={onHide}>{Disagree}</Button>
            </div>
            <div className="col-5 border-left">
              <Button onClick={onOk}>{Agree}</Button>
            </div>
          </Modal.Footer>
        </BodyModalStyled>
      </Modal>
    </>
  );
}
export default MyCommenceCenteredModal;
