import Image from 'next/image';
import router from 'next/router';

import React from 'react';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Row } from 'react-bootstrap';

import Screenshot from '@/assets/png/Screenshot.png';
import { GreaterThenIcon } from '@/assets/svg/greaterthen-icon';
import { VideoIcon } from '@/assets/svg/video-icon';
import Button from '@/components/core/Button';
import Header from '@/components/core/Header';

import {
  DivGraterThenIconStyled,
  DivHomeButton,
  DivIconStyled,
  DivMain,
  DivVideoStyled,
  DivWhiteIconStyled,
  InstructionStyled,
  ParagraphInstructionPoint1Styled,
  ParagraphInstructionpoint2Styled,
  SmallTextStyled,
  TextStyled,
  VidoRecordStyled,
} from './index.style';

/**
 *
 * @returns Record video page
 */

const onClickHeaderIcon = () => {
  router.push('/verification');
};
const onClickContinue = () => {
  router.push('/camera_video');
};

const VideoRecord = () => {
  const { t } = useTranslation('video_record');

  return (
    <>
      <DivMain>
        <VidoRecordStyled>
          <Header text={t('header')} onClick={onClickHeaderIcon} />
          <TextStyled>{t('heading')}</TextStyled>
          <SmallTextStyled>{t('headingParagraph')}</SmallTextStyled>
        </VidoRecordStyled>
        <DivVideoStyled>
          <Image className="object-cover" src={Screenshot} />
        </DivVideoStyled>
        <DivWhiteIconStyled></DivWhiteIconStyled>
        <DivIconStyled>
          <VideoIcon />
        </DivIconStyled>

        <InstructionStyled>{t('instruction')}</InstructionStyled>
        <Row>
          <div className="col-1">
            <DivGraterThenIconStyled>
              <GreaterThenIcon />
            </DivGraterThenIconStyled>
          </div>
          <div className="col-11">
            <ParagraphInstructionPoint1Styled>{t('option1')}</ParagraphInstructionPoint1Styled>
          </div>
        </Row>
        <Row>
          <div className="col-1">
            <DivGraterThenIconStyled>
              <GreaterThenIcon />
            </DivGraterThenIconStyled>
          </div>
          <div className="col-11">
            <ParagraphInstructionpoint2Styled>{t('option2')}</ParagraphInstructionpoint2Styled>
          </div>
        </Row>

        <div className="button-container">
          <DivHomeButton>
            <Button isBottom onClick={onClickContinue} className="m-auto">
              {t('continue')}
            </Button>
          </DivHomeButton>
        </div>
      </DivMain>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['video_record'])),
  },
});

export default VideoRecord;
