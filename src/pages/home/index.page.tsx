import Button from '@/components/core/Button';

import { LoginStyled, DivFormWrapperContainer, DivLayout } from './index.styles';
/**
 *
 * @returns Home page
 */
const Home = () => {
  return (
    <div>
      <LoginStyled data-testid="login-container">
        <DivFormWrapperContainer>
          <DivLayout>
            <h3 className="heading" data-testid="heading">
              Video KYC
            </h3>
            <Button>Get Started</Button>
          </DivLayout>
        </DivFormWrapperContainer>
      </LoginStyled>
    </div>
  );
};

export default Home;
