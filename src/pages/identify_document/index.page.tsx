import router from 'next/router';

import { DriverLincenceIcon } from '@/assets/svg/driver-lincence-icon';
import { GreaterThenIcon } from '@/assets/svg/greaterthen-icon';
import { IdCardIcon } from '@/assets/svg/id-card-icon';
import { PassportIcon } from '@/assets/svg/passport-icon';
import { VoterIcon } from '@/assets/svg/voter-icon';
import Header from '@/components/core/Header';

import { Row, StyledLine } from '../language/index.styles';
import {
  DivMain,
  IdentificationSmallTextStyled,
  IdentificationStyled,
  IdentificationTextStyled,
  IdentifyDocument,
  IdentifytwoDocument,
} from './index.style';

/**
 *
 * @returns Verification document page
 */

const onClickHeaderIcon = () => {
  router.push('/verification');
};
const IdentityDocument = () => {
  const document = [
    {
      id: 1,
      name: 'Adhaar Card',
      Svg: IdCardIcon,
    },
    {
      id: 2,
      name: 'Passport',
      Svg: PassportIcon,
    },
    {
      id: 3,
      name: 'DriverLincenceIcon',
      Svg: DriverLincenceIcon,
    },
    { id: 4, name: 'VoterIcon', Svg: VoterIcon },
  ];
  console.log(document);
  return (
    <>
      <DivMain>
        <IdentificationStyled>
          <Header text="Identity Document Verification" onClick={onClickHeaderIcon} />
          <IdentificationTextStyled>Select a documemt</IdentificationTextStyled>
          <IdentificationSmallTextStyled>You will take a picture of it in next steps</IdentificationSmallTextStyled>
        </IdentificationStyled>
        {document.map((doc, id) => (
          <>
            <Row key={id}>
              <div className="col-2">
                <IdentifyDocument>{doc.Svg()}</IdentifyDocument>
              </div>
              <div className="col-9">
                <IdentifytwoDocument>{doc.name}</IdentifytwoDocument>
              </div>
              <div className="col-1">
                <GreaterThenIcon />
              </div>
            </Row>
            <StyledLine />
          </>
        ))}
      </DivMain>
    </>
  );
};

export default IdentityDocument;
