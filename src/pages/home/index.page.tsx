import router from 'next/router';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Button from '@/components/core/Button';

import { BoxStyled, DivFormWrapperContainer, DivLayout } from './index.styles';

/**
 *
 * @returns Home page
 *
 */
const Home = () => {
  const { t } = useTranslation('common');
  console.log('t', t);
  const handleCrossIconClick = () => {
    router.push('/language');
  };
  return (
    <>
      <BoxStyled>
        <DivFormWrapperContainer>
          <DivLayout>
            <h3 className="heading">{t('title')} Video KYC this is my</h3>
          </DivLayout>
        </DivFormWrapperContainer>
      </BoxStyled>
      <Button onClick={handleCrossIconClick}>Get Started</Button>
    </>
  );
};

export default Home;

export const getStaticProps = async (ctx: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(ctx.locale, ['common'])),
  },
});
