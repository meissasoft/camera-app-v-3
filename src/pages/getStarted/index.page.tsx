import router from 'next/router';

import { MobileIcon } from '@/assets/svg/mobile';
import Button from '@/components/core/Button';
import FieldInput from '@/components/core/FieldInput';
import Heading from '@/components/core/Header';

import { BoxStyled, DivFormWrapperContainer, DivLayout } from './index.styles';

const GetStarted = () => {
  const handleCrossIconClick = () => {
    router.push('/next');
  };
  return (
    <div>
      <BoxStyled>
        <DivFormWrapperContainer>
          <Heading text={'Get Started'} />
          <DivLayout>
            <div className="my-5">
              <MobileIcon />
            </div>
            <FieldInput placeholder="Enter Mobile Number" name={'mobile'} className="my-2 rounded border p-2" />
            <Button onClick={handleCrossIconClick} className="my-2">
              Login
            </Button>
            <div className="my-5 separator">Or</div>
            <Button onClick={handleCrossIconClick} className="my-2">
              Scan QR
            </Button>
          </DivLayout>
        </DivFormWrapperContainer>
      </BoxStyled>
    </div>
  );
};

export default GetStarted;
