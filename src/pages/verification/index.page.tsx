import router from 'next/router';

import { CardIcon } from '@/assets/svg/card-icon';
import Header from '@/components/core/Header';
import StepLayout from '@/components/StepsLayout';
import { useAppDispatch, useAppSelector } from '@/hooks/useReduxTypedHooks';
import { setVerificationStep, getAppDataSelector } from '@/store/app';

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
  const { verificationStep } = useAppSelector(getAppDataSelector);

  const dispatch = useAppDispatch();

  const onClickHeaderIcon = () => {
    router.push('/otpVerification');
  };

  const onClickCard = () => {
    router.push('/identify_document');
    setTimeout(setStep, 3000);
  };

  const goToVideo = () => {
    router.push('/video_record');
  };

  const setStep = () => {
    dispatch(setVerificationStep(2));
  };

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
            rightIcon={verificationStep === 2 ? 'done' : 'arrow'}
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
            isDisabled={verificationStep === 2 ? false : true}
            onClick={goToVideo}
          />
        </VerificationStyled>
      </DivMain>
    </>
  );
};

export default Verification;
