import router from 'next/router';

import { BarIcon } from '@/assets/svg/barIcon';
import { CrossIcon } from '@/assets/svg/crossIcon';
import { PasswordIcon } from '@/assets/svg/password';
import Button from '@/components/core/Button';
import Heading from '@/components/core/Header/Header';
import OTPInput from '@/components/core/Otp';

import { DivMain } from './index.styles';

const VerifyOtp = () => {
  const handleBack = () => {
    router.push('/login');
  };

  const handleContinue = () => {
    router.push('/verification');
  };

  return (
    <DivMain>
      <div className="heading">
        <Heading text="Mobile Verification" onClick={handleBack} />
      </div>
      <div className="inner">
        <BarIcon />
        <div className="crossIcon" onClick={handleBack}>
          <CrossIcon />
        </div>
        <div className="my-5 text-center">
          <PasswordIcon />
          <div className="title">Verification Code</div>
          <p className="description">Please enter the verification code we sent to your phone number</p>
        </div>
        <OTPInput
          autoFocus
          isNumberInput
          length={6}
          className="otpContainer"
          inputClassName="otpInput"
          onChangeOTP={(e) => {
            console.log(e);
          }}
        />

        <div className="d-flex w-100 justify-content-center align-items-center mt-4">
          <span className="mx-2 code-text">I did'nt receive a code</span>
          <button className="btn btn-primary">
            <span className="text">Resend</span>
          </button>
        </div>

        <Button isBottom onClick={handleContinue} className="my-5 m-auto">
          Continue
        </Button>
      </div>
    </DivMain>
  );
};

export default VerifyOtp;
