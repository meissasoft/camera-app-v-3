import router from 'next/router';

import { withTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Button from '@/components/core/Button';

import { BixDiv, DivHeading, DivHomeButton, DivLayout, DivWrapper } from './index.styles';
/**
 *
 * @returns Home page
 *
 */
const Home = ({ t }: { t: any }) => {
  console.log('t', t('title'));
  const handleStarted = () => {
    router.push('/language');
  };
  return (
    <BixDiv>
      <DivWrapper>
        <DivLayout>
          <DivHeading>Video KYC</DivHeading>
        </DivLayout>
      </DivWrapper>
      <DivHomeButton>
        <Button onClick={handleStarted} className="m-auto">
          Get Started
        </Button>
      </DivHomeButton>
    </BixDiv>
  );
};

export default withTranslation('common')(Home);

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
