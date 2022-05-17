import router from 'next/router';

import Button from '@/components/core/Button';

import { BoxStyled, DivFormWrapperContainer, DivLayout } from './index.styles';
/**
 *
 * @returns Home page
 */
const Home = () => {
  const handleCrossIconClick = () => {
    router.push('/language');
  };
  return (
    <>
      <BoxStyled>
        <DivFormWrapperContainer>
          <DivLayout>
            <h3 className="heading">Video KYC</h3>
          </DivLayout>
        </DivFormWrapperContainer>
      </BoxStyled>
      <Button onClick={handleCrossIconClick}>Get Started</Button>
    </>
  );
};

export default Home;
