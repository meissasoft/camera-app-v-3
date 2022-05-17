import router from 'next/router';

import { BarIcon } from '@/assets/svg/barIcon';
import { CrossIcon } from '@/assets/svg/crossIcon';
import { PasswordIcon } from '@/assets/svg/password';
import Button from '@/components/core/Button';
import Heading from '@/components/core/Header/Header';
import OTPInput from '@/components/core/Otp';

import { DivInner, DivMain } from './index.styles';

const VerifyOtp = () => {
  const handleCrossIconClick = () => {
    router.push('/verifyOtp');
  };
  return (
    <DivMain>
      <Heading text={'Mobile Verification'} />
      <DivInner>
        <div>
          <BarIcon />
        </div>
        <div className="crossIcon">
          <CrossIcon />
        </div>
        <div className="my-5 text-center">
          <PasswordIcon />
          <h1
            style={{
              fontWeight: 600,
              fontSize: 20,
              textAlign: 'center',
              color: '#000000',
              opacity: 0.6,
            }}
          >
            Verification Code
          </h1>
          <span
            className="h5"
            style={{
              fontWeight: 400,
              fontSize: 18,
              textAlign: 'center',
              color: '#000',
              opacity: 0.6,
            }}
          >
            Please enter the verification code we sent to your phone number
          </span>
        </div>
        <OTPInput
          autoFocus
          isNumberInput
          length={6}
          className="otpContainer"
          inputClassName={'otpOutput'}
          onChangeOTP={(e) => {
            console.log(e);
          }}
        />

        <div className="d-flex w-100 justify-content-center align-items-center my-3">
          <text
            className="mx-2"
            style={{
              fontWeight: 400,
              fontSize: 14,
              textAlign: 'center',
              color: '#121212',
              opacity: 0.6,
            }}
          >
            I did'nt recieve a code
          </text>
          <button className="btn btn-primary">
            <text className="text">Resend</text>
          </button>
        </div>

        <Button isBottom onClick={handleCrossIconClick} className="my-5 m-auto">
          Continue
        </Button>
      </DivInner>
    </DivMain>
  );
};

export default VerifyOtp;
