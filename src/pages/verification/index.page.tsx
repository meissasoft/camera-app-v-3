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
  router.push('/language');
};
const Verification = () => {
  return (
    <>
      <DivMain>
        <VerificationStyled>
          <Header text="Identity Verification" onClick={onClickHeaderIcon} />
          <VerificationCardStyled>
            <CardIcon />
          </VerificationCardStyled>
          <VerificationTextStyled>Verify your identity</VerificationTextStyled>
          <VerificationSmallTextStyled>It will take less than 2 minutes</VerificationSmallTextStyled>
          <StepLayout
            rightIcon="arrow"
            step={1}
            heading="Identity document verification"
            content="Take a picture of an identity document and upload it for verification"
          />
          <StepLayout
            rightIcon="arrow"
            step={2}
            heading="Record a selfie video"
            content="Speak out load and move your head, Finish actions in 25 seconds."
            isDisabled={true}
          />
        </VerificationStyled>
      </DivMain>
    </>
  );
};

export default Verification;
