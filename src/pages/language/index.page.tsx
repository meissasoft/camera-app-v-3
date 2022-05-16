import { useRouter } from 'next/router';

import { useState } from 'react';

import { TickIcon } from '@/assets/svg/tick-icon';
import Button from '@/components/core/Button';
import Header from '@/components/core/Header';

import { BoxStyled, StyledLine, StyledLanguage, Row } from './index.styles';
import { ILanguage } from './index.types';

/**
 *
 * @returns Language page
 */
const ChooseLangugae = () => {
  const router = useRouter();
  const [langugaes, setLanguages] = useState<ILanguage[]>([
    {
      name: 'Hindi',
      isActive: true,
    },
    {
      name: 'Telugu',
      isActive: false,
    },
    {
      name: 'Kannada',
      isActive: false,
    },
    {
      name: 'Tamil',
      isActive: false,
    },
    {
      name: 'Malayalam',
      isActive: false,
    },
    {
      name: 'Punjabi',
      isActive: false,
    },
    {
      name: 'Marati',
      isActive: false,
    },
    {
      name: 'Gujarati',
      isActive: false,
    },
    {
      name: 'Bengali',
      isActive: false,
    },
  ]);
  const [, setSelectedLanguage] = useState<ILanguage>(langugaes[0]);

  const onClickHeaderIcon = () => {
    router.push('/');
  };

  const onClickItem = (ind: number) => {
    langugaes.forEach((lang) => {
      lang.isActive = false;
    });
    const temp = [...langugaes];
    temp[ind].isActive = true;
    setLanguages(temp);
    setSelectedLanguage(langugaes[ind]);
  };

  return (
    <>
      <BoxStyled>
        <Header text="Choose a Language" onClick={onClickHeaderIcon} />
        <div className="container" style={{ marginTop: 20 }}>
          {langugaes.map(({ name, isActive }, ind) => (
            <>
              <Row onClick={() => onClickItem(ind)}>
                <div className="col-11">
                  <StyledLanguage>{name}</StyledLanguage>
                </div>
                <div className="col-1">{isActive && <TickIcon />}</div>
              </Row>
              <StyledLine />
            </>
          ))}
        </div>
      </BoxStyled>
      <Button>Continue</Button>
    </>
  );
};

export default ChooseLangugae;
