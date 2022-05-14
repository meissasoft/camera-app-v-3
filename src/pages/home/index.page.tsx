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
    <div>
      <BoxStyled>
        <DivFormWrapperContainer>
          <DivLayout>
            <h3 className="heading">Video KYC</h3>
            <Button onClick={handleCrossIconClick}>Get Started</Button>
          </DivLayout>
        </DivFormWrapperContainer>
      </BoxStyled>
    </div>
  );
};

export default Home;
