import { Button, Modal } from 'react-bootstrap';
import { CrossIcon } from '@/assets/svg/crossIcon';
import { GreaterThenIcon } from '@/assets/svg/greaterthen-icon';
import { BodyModalStyled, IineModel, ParagraphModel, ParagraphText1Model, ParagraphTextModel } from './index.style';

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

function MyCommenceCenteredModal({ show, onHide, onOk, Disagree, Agree }: Props) {
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
            <ParagraphModel>
              By clicking on <ParagraphText1Model>‘Agree’</ParagraphText1Model>, you hereby:
            </ParagraphModel>
            <div className="row">
              <div className="col-1">
                <GreaterThenIcon />
              </div>
              <div className="col-11">
                <ParagraphTextModel>
                  Acknowledge the request made by Syntizen technologies private limited to provide personal details.
                </ParagraphTextModel>
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <GreaterThenIcon />
              </div>
              <div className="col-11">
                <ParagraphTextModel>
                  Provide my unconditional concent to access, copy and store all information therein by sharing the
                  inofrmation.
                </ParagraphTextModel>
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <GreaterThenIcon />
              </div>
              <div className="col-11">
                <ParagraphTextModel>
                  Also undertake I/We are authorised to do so on behalf of the requestee organisation and tkae sole and
                  complete responsibilitity for the same.
                </ParagraphTextModel>
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
