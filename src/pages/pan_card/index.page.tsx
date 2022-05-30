import router from 'next/router';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Button from '@/components/core/Button';
import Header from '@/components/core/Header';
import HeadingWithButton from '@/components/core/HeadingWithButton';
import { useAppDispatch, useAppSelector } from '@/hooks/useReduxTypedHooks';
import { getAppDataSelector, setVerificationStep } from '@/store/app';

import { DivBottom, DivCard, DivHomeButton, DivMain } from './index.styles';

/**
 *
 * @returns AadhaarCard page
 */

const AadhaarCard = () => {
  const { cardFront, cardBack } = useAppSelector(getAppDataSelector);
  const dispatch = useAppDispatch();

  const handleContinue = () => {
    dispatch(setVerificationStep(2));
    router.push('/verification');
  };
  const handleBack = () => {
    router.push('/camera_pic');
  };

  const { t } = useTranslation('pan_card');

  return (
    <DivMain>
      <Header text={t('pan_card')} onClick={handleBack} />
      <HeadingWithButton text={t('pan_card_front_side')} retake={t('retake')} />
      <DivCard>
        <img src={cardFront} width="100%" height="205px" />
      </DivCard>
      <HeadingWithButton text={t('pan_card_back_side')} retake={t('retake')} />
      <DivCard>
        <img src={cardBack} width="100%" height="205px" />
      </DivCard>
      <DivBottom>{t('make_sure_that_your_card_details_are_clear_to_read_with_no_blur_or_glare')}</DivBottom>
      <DivHomeButton>
        <Button className="m-auto" onClick={handleContinue}>
          {t('continue')}
        </Button>
      </DivHomeButton>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['pan_card'])),
  },
});

export default AadhaarCard;
