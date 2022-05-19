import router from 'next/router';

import { CardIcon } from '@/assets/svg/card-icon';
import Header from '@/components/core/Header';
import StepLayout from '@/components/StepsLayout';
import { useAppDispatch, useAppSelector } from '@/hooks/useReduxTypedHooks';
import { setLoginStep } from '@/store/auth/authSlice';

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

const Verification = () => {
  const {
    auth: { loginSteps },
  } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  const onClickHeaderIcon = () => {
    router.push('/otpVerification');
  };

  const onClickCard = () => {
    router.push('/identify_document');
    setTimeout(setStep, 3000);
  };

  const setStep = () => {
    dispatch(setLoginStep(2));
  };

  console.log('loginSteps', loginSteps);
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
            rightIcon={loginSteps === 2 ? 'done' : 'arrow'}
            step={1}
            heading="Identity document verification"
            content="Take a picture of an identity document and upload it for verification"
            onClick={onClickCard}
          />
          <StepLayout
            rightIcon="arrow"
            step={2}
            heading="Record a selfie video"
            content="Speak out load and move your head, Finish actions in 25 seconds."
            isDisabled={loginSteps === 2 ? false : true}
          />
        </VerificationStyled>
      </DivMain>
    </>
  );
};

export default Verification;
