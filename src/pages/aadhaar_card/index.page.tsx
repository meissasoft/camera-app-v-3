import router from 'next/router';

import { AadhaarBack } from '@/assets/svg/aadhaar-back';
import { AadhaarFront } from '@/assets/svg/aadhaar-front';
import Button from '@/components/core/Button';
import Header from '@/components/core/Header';
import HeadingWithButton from '@/components/core/HeadingWithButton';

import { DivBottom, DivCard, DivMain } from './index.styles';

/**
 *
 * @returns AadhaarCard page
 */

const AadhaarCard = () => {
  const onClickHeaderIcon = () => {
    router.push('/verification');
  };

  return (
    <DivMain>
      <Header text="Aadhaar card" onClick={onClickHeaderIcon} />
      <HeadingWithButton text="Aadhaar card front side" />
      <DivCard>
        <AadhaarFront />
      </DivCard>
      <HeadingWithButton text="Aadhaar card Back side" />
      <DivCard>
        <AadhaarBack />
      </DivCard>
      <div>
        <DivBottom> Make sure that your card details are clear to read with no blur or glare.</DivBottom>
      </div>
      <Button isBottom>Continue</Button>
    </DivMain>
  );
};

export default AadhaarCard;
