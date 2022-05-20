import router from 'next/router';

import { VerifiiedIcon } from '@/assets/svg/verified-Icon';
import Button from '@/components/core/Button';
import Header from '@/components/core/Header';

import {
  DivBottom,
  DivMain,
  VerificationCardStyled,
  VerificationStyled,
  VerificationSuccessfulSmallTextStyled,
  VerificationSuccessfulTextStyled,
} from './index.style';

/**
 *
 * @returns Verified page
 */
const onClickHeaderIcon = () => {
  router.push('/video_screen');
};
const Verified = () => {
  return (
    <>
      <DivMain>
        <VerificationStyled>
          <Header text="Verification sucessful" onClick={onClickHeaderIcon} />
          <VerificationCardStyled>
            <VerifiiedIcon />
          </VerificationCardStyled>
          <VerificationSuccessfulTextStyled>Verification completed</VerificationSuccessfulTextStyled>
          <VerificationSuccessfulSmallTextStyled>
            Your verification is completed and all <br /> your data is stored securely.
          </VerificationSuccessfulSmallTextStyled>
        </VerificationStyled>
      </DivMain>
      <DivBottom>
        <Button className="m-auto">Finish</Button>
      </DivBottom>
    </>
  );
};

export default Verified;
