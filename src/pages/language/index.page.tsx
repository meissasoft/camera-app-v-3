import Button from '@/components/core/Button';
import { Heading } from '@/components/core/Header/Header';

import { HeaderStyled, BoxStyled, DivFormWrapperContainer } from './index.styles';

/**
 *
 * @returns Language page
 */
const Language = () => {
  return (
    <BoxStyled>
      <Heading text="Choose a Language" />
      <Button>Continue</Button>
    </BoxStyled>
  );
};

export default Language;
