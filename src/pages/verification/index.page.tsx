import router from 'next/router';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useState } from 'react';
import { CardIcon } from '@/assets/svg/card-icon';
import Header from '@/components/core/Header';
import StepLayout from '@/components/StepsLayout';
import { useAppDispatch, useAppSelector } from '@/hooks/useReduxTypedHooks';
import { setVerificationStep, getAppDataSelector } from '@/store/app';

import MyVerticallyCenteredModal from '@/components/core/identify_document_modal';
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
  const [modalShow, setModalShow] = useState(false);

  const { t } = useTranslation('verification');

  const dispatch = useAppDispatch();

  const onClickHeaderIcon = () => {
    if (verificationStep === 2) {
      router.push('/aadhaar_card');
      return;
    }
    router.push('/otpVerification');
  };

  const onClickCard = () => {
    router.push('/camera_pic');
    setTimeout(setStep, 3000);
  };

  const goToVideo = () => {
    router.push('/camera_video');
  };
  const goToKeepThingHandy = () => {
    router.push('/keeps_things_handy');
  };

  const setStep = () => {
    dispatch(setVerificationStep(2));
  };

  const onClicOk = () => {
    router.push('/camera_pic');
  };
  return (
    <DivMain>
      <Header text={t('identity_verification')} onClick={onClickHeaderIcon} />
      <VerificationStyled>
        <VerificationCardStyled>
          <CardIcon />
        </VerificationCardStyled>
        <VerificationTextStyled>{t('verify_your_identity')}</VerificationTextStyled>
        <VerificationSmallTextStyled>{t('it_will_take_less_than_2_minutes')}</VerificationSmallTextStyled>
        <StepLayout
          rightIcon={verificationStep === 2 || verificationStep === 3 ? 'done' : 'arrow'}
          step={t('step1')}
          heading={t('identity_document_verification')}
          content={t('take_a_picture_of_an_identity_document_and_upload_it_for_verification')}
          onClick={onClickCard}
        />
        <StepLayout
          rightIcon={verificationStep === 3 ? 'done' : 'arrow'}
          step={t('step2')}
          heading={t('record_a_selfie_video')}
          content={t('speak_out_load_and_move_your_head_finish_actions_in_25_seconds')}
          isDisabled={verificationStep === 2 || verificationStep === 3 ? false : true}
          onClick={goToVideo}
        />
        {/* //to be added in translation */}
        <StepLayout
          rightIcon="arrow"
          step="Step 3"
          heading="VCIP"
          content="Schedule a video call session with our 
          agent and follow the instructions"
          isDisabled={verificationStep === 3 ? false : true}
          onClick={goToKeepThingHandy}
        />
        <MyVerticallyCenteredModal
          show={modalShow}
          onOk={onClicOk}
          onHide={() => setModalShow(false)}
          heading="Video kyc would like to access the camera"
          paragraph="Required for document and facial capture"
          dontAllow="don't allow"
          ok="ok"
        />
      </VerificationStyled>
    </DivMain>
  );
};
export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['verification'])),
  },
});
export default Verification;
