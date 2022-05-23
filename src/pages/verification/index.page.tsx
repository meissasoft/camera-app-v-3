import router from 'next/router';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

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
  const { t } = useTranslation('verification');

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
    <DivMain>
      <Header text={t('header')} onClick={onClickHeaderIcon} />
      <VerificationStyled>
        <VerificationCardStyled>
          <CardIcon />
        </VerificationCardStyled>
        <VerificationTextStyled>{t('heading')}</VerificationTextStyled>
        <VerificationSmallTextStyled>{t('It will take less than 2 minutes')}</VerificationSmallTextStyled>
        <StepLayout
          rightIcon={verificationStep === 2 ? 'done' : 'arrow'}
          step={t('step1')}
          heading={t('heading2')}
          content={t('heading2para')}
          onClick={onClickCard}
        />
        <StepLayout
          rightIcon="arrow"
          step={2}
          heading={t('heading3')}
          content={t('heading3para')}
          isDisabled={verificationStep === 2 ? false : true}
          onClick={goToVideo}
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
