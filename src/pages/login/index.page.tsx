import router from 'next/router';

import { MobileIcon } from '@/assets/svg/mobile';
import Button from '@/components/core/Button';
import FieldInput from '@/components/core/FieldInput';
import Heading from '@/components/core/Header';

import { DivMain } from './index.styles';

const Login = () => {
  const handleLogin = () => {
    router.push('/otpVerification');
  };
  const handleBack = () => {
    router.push('/language');
  };
  return (
    <DivMain>
      <Heading text="Get Started" onClick={handleBack} />
      <div className="inner">
        <MobileIcon />
        <FieldInput
          placeholder="Enter Mobile Number"
          name={'mobile'}
          className="my-2 mt-5 m-auto rounded border p-2 loginInput"
        />
        <Button isBottom onClick={handleLogin} className="my-2 m-auto">
          Login
        </Button>

        <div className="separator">
          <p className="separatorText mx-2 my-3">Or</p>
        </div>
        <Button isBottom onClick={handleLogin} className="my-2 m-auot">
          Scan QR
        </Button>
      </div>
    </DivMain>
  );
};

export default Login;
