import { Modal } from 'react-bootstrap';
import { CrossIcon } from '@/assets/svg/crossIcon';
import { GreaterThenIcon } from '@/assets/svg/greaterthen-icon';
import {
  BodyModalStyled,
  Button1Model,
  Button2Model,
  ButtonBorderModel,
  Center1Model,
  CenterHeaderModel,
  CrossButtonModel,
  IineModel,
  ParagraphModel,
  ParagraphText1Model,
  ParagraphTextModel,
  RowTextModel,
} from './index.style';

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

function MyCommenceCenteredModal({ show, onHide, onOk }: Props) {
  return (
    <>
      <Center1Model
        className="modal-cont"
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <BodyModalStyled>
          <Modal.Header className="box">
            <Modal.Title>
              <CenterHeaderModel className="col-11">User Consent</CenterHeaderModel>
            </Modal.Title>
            <CrossButtonModel className="col-1" onClick={onHide}>
              <CrossIcon />
            </CrossButtonModel>
          </Modal.Header>
          <Modal.Body>
            <ParagraphModel>
              By clicking on <ParagraphText1Model>‘Agree’</ParagraphText1Model>, you hereby:
            </ParagraphModel>
            <RowTextModel>
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
            </RowTextModel>
            <RowTextModel>
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
            </RowTextModel>
            <RowTextModel>
              <div className="row">
                <div className="col-1">
                  <GreaterThenIcon />
                </div>
                <div className="col-11">
                  <ParagraphTextModel>
                    Also undertake I/We are authorised to do so on behalf of the requestee organisation and tkae sole
                    and complete responsibilitity for the same.
                  </ParagraphTextModel>
                </div>
              </div>
            </RowTextModel>
          </Modal.Body>
          <IineModel />
          <Modal.Footer>
            <div className="col-5">
              <Button2Model onClick={onHide}>
                <ButtonBorderModel>Disagree</ButtonBorderModel>Disagree
              </Button2Model>
            </div>
            <div className="col-3 border-left">
              <Button1Model onClick={onOk}>Agree</Button1Model>
            </div>
          </Modal.Footer>
        </BodyModalStyled>
      </Center1Model>
    </>
  );
}
export default MyCommenceCenteredModal;
