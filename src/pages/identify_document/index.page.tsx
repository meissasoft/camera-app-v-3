import router from 'next/router';

import { DriverLincenceIcon } from '@/assets/svg/driver-lincence-icon';
import { GreaterThenIcon } from '@/assets/svg/greaterthen-icon';
import { IdCardIcon } from '@/assets/svg/id-card-icon';
import { PassportIcon } from '@/assets/svg/passport-icon';
import { VoterIcon } from '@/assets/svg/voter-icon';
import Header from '@/components/core/Header';

import {
  DivGreaterIcon,
  DivMain,
  DocumentContainer,
  IdentificationSmallTextStyled,
  IdentificationStyled,
  IdentificationTextStyled,
  IdentifyText,
  Row,
  StyledLine,
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
      name: 'Adhaar Card',
      Svg: IdCardIcon,
    },
    {
      name: 'Passport',
      Svg: PassportIcon,
    },
    {
      name: 'Driver Lincence ',
      Svg: DriverLincenceIcon,
    },
    { name: 'Voter ID', Svg: VoterIcon },
  ];

  return (
    <>
      <DivMain>
        <IdentificationStyled>
          <Header isLongText onClick={onClickHeaderIcon} text="Identity Document Verification" />
          <IdentificationTextStyled>Select a documemt</IdentificationTextStyled>
          <IdentificationSmallTextStyled>You will take a picture of it in next steps</IdentificationSmallTextStyled>
        </IdentificationStyled>
        <DocumentContainer>
          {document.map((doc, id) => (
            <>
              <Row key={id}>
                <div className="col-1">{doc.Svg()}</div>
                <div className="col-10">
                  <IdentifyText>{doc.name}</IdentifyText>
                </div>
                <DivGreaterIcon className="col-1">
                  <GreaterThenIcon />
                </DivGreaterIcon>
              </Row>
              {id + 1 === document.length ? '' : <StyledLine />}
            </>
          ))}
        </DocumentContainer>
      </DivMain>
    </>
  );
};

export default IdentityDocument;
