import Button from '@/components/core/Button';

import { BoxStyled, DivFormWrapperContainer, DivLayout } from './index.styles';
/**
 *
 * @returns Home page
 */
const Home = () => {
  return (
    <div>
      <BoxStyled >
        <DivFormWrapperContainer>
          <DivLayout>
            <h3 className="heading">
              Video KYC
            </h3>
            <Button>Get Started</Button>
          </DivLayout>
        </DivFormWrapperContainer>
      </BoxStyled>
    </div>
  );
};

export default Home;
