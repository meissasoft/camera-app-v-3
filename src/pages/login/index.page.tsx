import router from 'next/router';

import { MobileIcon } from '@/assets/svg/mobile';
import Button from '@/components/core/Button';
import FieldInput from '@/components/core/FieldInput';
import Heading from '@/components/core/Header';

import { DivInner, DivMain } from './index.styles';

const Login = () => {
  const handleCrossIconClick = () => {
    router.push('/verifyOtp');
  };
  return (
    <DivMain>
      <Heading text={'Get Started'} />
      <DivInner>
        <MobileIcon />
        <FieldInput
          placeholder="Enter Mobile Number"
          name={'mobile'}
          className="my-2 mt-5 m-auto rounded border p-2 loginInput"
        />
        <Button isBottom onClick={handleCrossIconClick} className="my-2 m-auto">
          Login
        </Button>

        <div className="separator">
          <text className="separatorText mx-2 my-3">Or</text>
        </div>
        <Button isBottom onClick={handleCrossIconClick} className="my-2 m-auot">
          Scan QR
        </Button>
      </DivInner>
    </DivMain>
  );
};

export default Login;
