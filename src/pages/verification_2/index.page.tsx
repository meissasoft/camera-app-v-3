import router from 'next/router';

import { CardIcon } from '@/assets/svg/card-icon';
import Header from '@/components/core/Header';
import StepLayout from '@/components/StepsLayout';

import {
  DivMain,
  VerificationCardStyled,
  VerificationSmallTextStyled,
  VerificationStyled,
  VerificationTextStyled,
} from './index.styles';

/**
 *
 * @returns Verification page
 */
const onClickHeaderIcon = () => {
  router.push('/otpVerification');
};

const onClickCard = () => {
  router.push('/aadhaar_card');
};

const Verification = () => {
  return (
    <>
      <DivMain>
        <Header text="Identity Verification" onClick={onClickHeaderIcon} />
        <VerificationStyled>
          <VerificationCardStyled>
            <CardIcon />
          </VerificationCardStyled>
          <VerificationTextStyled>Verify your identity</VerificationTextStyled>
          <VerificationSmallTextStyled>It will take less than 2 minutes</VerificationSmallTextStyled>
          <StepLayout
            rightIcon="done"
            step={1}
            heading="Identity document verification"
            content="Take a picture of an identity document and upload it for verification"
          />
          <StepLayout
            rightIcon="arrow"
            step={2}
            heading="Record a selfie video"
            content="Speak out load and move your head, Finish actions in 25 seconds."
            onClick={onClickCard}
          />
        </VerificationStyled>
      </DivMain>
    </>
  );
};

export default Verification;
