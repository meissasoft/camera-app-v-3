import router from 'next/router';

import Button from '@/components/core/Button';
import Header from '@/components/core/Header';
import HeadingWithButton from '@/components/core/HeadingWithButton';
import { useAppSelector } from '@/hooks/useReduxTypedHooks';
import { getAppDataSelector } from '@/store/app';

import { DivBottom, DivCard, DivHomeButton, DivMain } from './index.styles';

/**
 *
 * @returns AadhaarCard page
 */

const AadhaarCard = () => {
  const { cardFront, cardBack } = useAppSelector(getAppDataSelector);

  const handleContinue = () => {
    router.push('/verification');
  };

  return (
    <DivMain>
      <Header text="Aadhaar card" onClick={handleContinue} />
      <HeadingWithButton text="Aadhaar card front side" />
      <DivCard>
        <img src={cardFront} />
        {/* <AadhaarFront /> */}
      </DivCard>
      <HeadingWithButton text="Aadhaar card Back side" />
      <DivCard>
        <img src={cardBack} />
        {/* <AadhaarBack /> */}
      </DivCard>
      <div>
        <DivBottom> Make sure that your card details are clear to read with no blur or glare.</DivBottom>
      </div>
      <DivHomeButton>
        <Button className="m-auto" isBottom onClick={handleContinue}>
          Continue
        </Button>
      </DivHomeButton>
    </DivMain>
  );
};

export default AadhaarCard;
