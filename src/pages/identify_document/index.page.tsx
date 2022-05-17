import router from 'next/router';

import { DriverLincenceIcon } from '@/assets/svg/driver-lincence-icon';
import { DrivingLincenceIcon } from '@/assets/svg/driving-lincence-icon';
import { GreaterThenIcon } from '@/assets/svg/greaterthen-icon';
import { IdCardIcon } from '@/assets/svg/id-card-icon';
import { PassportIcon } from '@/assets/svg/passport-icon';
import Header from '@/components/core/Header';

import { Row, StyledLanguage, StyledLine } from '../language/index.styles';
import { DivMain, VerificationSmallTextStyled, VerificationStyled, VerificationTextStyled } from './index.style';

/**
 *
 * @returns Verification page
 */

const a = () => <IdCardIcon />;
const b = () => <PassportIcon />;
const c = () => <DrivingLincenceIcon />;
const d = () => <DriverLincenceIcon />;

const document = [
  {
    name: 'Adhaar Card',
    svg: a,
  },
  {
    name: 'Passport',
    svg: b,
  },
  {
    name: 'Driving Licence',
    svg: c,
  },
  {
    name: 'Voter ID',
    svg: d,
  },
];
const onClickHeaderIcon = () => {
  router.push('/verification');
};
const IdentityDocument = () => {
  return (
    <>
      <DivMain>
        <VerificationStyled>
          <Header text="Identity Document Verification" onClick={onClickHeaderIcon} />
          <VerificationTextStyled>Select a documemt</VerificationTextStyled>
          <VerificationSmallTextStyled>You will take a picture of it in next steps</VerificationSmallTextStyled>
        </VerificationStyled>
        {document.map((item, index) => (
          <Row key={index}>
            <div className="col-2">
              <StyledLanguage isActive={false}>svg</StyledLanguage>
            </div>
            <div className="col-9">
              <StyledLanguage isActive={false}>{item.name}</StyledLanguage>
            </div>
            <div className="col-1">
              <GreaterThenIcon />
            </div>
          </Row>
        ))}
        <StyledLine />
      </DivMain>
    </>
  );
};

export default IdentityDocument;
