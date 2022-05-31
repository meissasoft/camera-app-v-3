import router from 'next/router';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useState } from 'react';
import { CardIcon } from '@/assets/svg/card-icon';
import Header from '@/components/core/Header';
import StepLayout from '@/components/StepsLayout';
import { useAppSelector } from '@/hooks/useReduxTypedHooks';
import { getAppDataSelector } from '@/store/app';

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

  const { t } = useTranslation(['verification', 'identity_document']);

  const onClickHeaderIcon = () => {
    if (verificationStep === 2) {
      router.push('/pan_card');
      return;
    }

    if (verificationStep === 3) {
      router.push('/video_screen');
      return;
    }

    router.push('/download_successfully');
  };

  const goToVideo = () => {
    router.push('/camera_video');
  };
  const goToKeepThingHandy = () => {
    router.push('/keeps_things_handy');
  };

  const onClicOk = () => {
    router.push('/camera_pic');
  };

  const handleStart = () => {
    setModalShow(true);
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
          heading={t('pan_card_verification')}
          content={t('take_a_picture_of_an_identity_document_and_upload_it_for_verification')}
          onClick={handleStart}
        />
        <StepLayout
          rightIcon={verificationStep === 3 ? 'done' : 'arrow'}
          step={t('step2')}
          heading={t('live_photo_check')}
          content={t('speak_out_load_and_move_your_head_finish_actions_in_25_seconds.')}
          isDisabled={verificationStep === 2 || verificationStep === 3 ? false : true}
          onClick={goToVideo}
        />
        <StepLayout
          rightIcon="arrow"
          step={t('step3')}
          heading={t('vcip')}
          content={t('schedule_a_video_call_session_with_our_agent_and_follow_the_instructions.')}
          isDisabled={verificationStep === 3 ? false : true}
          onClick={goToKeepThingHandy}
        />
        <MyVerticallyCenteredModal
          show={modalShow}
          onOk={onClicOk}
          onHide={() => setModalShow(false)}
          heading={t('video_kyc_would_like_to_access_the_camera')}
          paragraph={t('required_for_document_and_facial_capture')}
          dontAllow={t("don't_allow")}
          ok={t('ok')}
        />
      </VerificationStyled>
    </DivMain>
  );
};
export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['verification', 'identity_document'])),
  },
});
export default Verification;
