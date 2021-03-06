import router from 'next/router';

import React, { useState } from 'react';

import { useTranslation } from 'next-i18next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '@/components/core/Header';
import Button from '@/components/core/Button';

import { GoogleIcon } from '@/assets/svg/google-1';

import {
  DivFooterButton,
  DivButtons,
  DivMain,
  DocumentContainer,
  IdentificationSelectStyled,
  IdentificationSmallTextStyled,
  IdentificationStyled2,
  StyledSpan,
  BoldText,
  LightText,
  DivVerificationGoogleStyled,
} from './index.style';

/**
 *
 * @returns KeepThingsHandy page
 */

const KeepThingsHandy = () => {
  const { t } = useTranslation('keep_things_handy');
  const [languages, setLanguages] = useState<{ name: string; selected: boolean }[]>([
    {
      name: t('English'),
      selected: true,
    },
    {
      name: t('Telugu'),
      selected: false,
    },
    {
      name: t('Hindi'),
      selected: false,
    },
    {
      name: t('Tamil'),
      selected: false,
    },
    {
      name: t('kannada'),
      selected: false,
    },
    {
      name: t('Malayalam'),
      selected: false,
    },
    {
      name: t('kannada'),
      selected: false,
    },
  ]);

  const onClickHeaderIcon = () => {
    router.push('/verification');
  };

  const handleStart = () => {
    router.push('/token_number');
  };

  const onClickLangugae = (index: number) => {
    const temp = [...languages];
    temp.forEach((language) => {
      language.selected = false;
    });
    temp[index].selected = true;
    setLanguages(temp);
  };

  return (
    <DivMain>
      <div>
        <Header onClick={onClickHeaderIcon} text={t('initiating_a_video_call')} />
        <DocumentContainer>
          <DivVerificationGoogleStyled>
            <GoogleIcon />
          </DivVerificationGoogleStyled>
          <IdentificationStyled2>
            <IdentificationSelectStyled>{t('select_language')}</IdentificationSelectStyled>
            <IdentificationSmallTextStyled>
              <LightText>{t('we_recommend_you_select_a_below_listed')}</LightText> <BoldText>{t('language')}</BoldText>{' '}
              <LightText>{t('to_continue_with_your_video_call.')}</LightText>
            </IdentificationSmallTextStyled>
          </IdentificationStyled2>
          <DivButtons>
            {languages.map(({ name, selected }, index) => (
              <>
                {selected ? (
                  <Button className="btn shadow-none" onClick={() => onClickLangugae(index)}>
                    {name}
                  </Button>
                ) : (
                  <Button isTransparent className="btn shadow-none" onClick={() => onClickLangugae(index)}>
                    <StyledSpan>{name}</StyledSpan>
                  </Button>
                )}
              </>
            ))}
          </DivButtons>
        </DocumentContainer>
      </div>
      <DivFooterButton>
        <Button onClick={handleStart} className="m-auto">
          {t("i'm_Ready")}
        </Button>
      </DivFooterButton>
    </DivMain>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['keep_things_handy'])),
  },
});

export default KeepThingsHandy;
