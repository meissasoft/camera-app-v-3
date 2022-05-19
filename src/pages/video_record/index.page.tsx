import Image from 'next/image';
import router from 'next/router';

import React from 'react';

import { Row } from 'react-bootstrap';

// import img from '@/assets/png/Screenshot 2018-11-21 at 13.17.00.png';
import Screenshot from '@/assets/png/Screenshot.png';
import { GreaterThenIcon } from '@/assets/svg/greaterthen-icon';
import { ButtonStyled } from '@/components/core/Button/Button.styles';
import Header from '@/components/core/Header';

import {
  DivButtonStyled,
  DivGraterThenIconStyled,
  DivMain,
  DivVideoStyled,
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
  return (
    <>
      <DivMain>
        <VidoRecordStyled>
          <Header text="Record video" onClick={onClickHeaderIcon} />
          <TextStyled>Record a selfie video</TextStyled>
          <SmallTextStyled>Let’s make sure nobody’s improvising you</SmallTextStyled>
        </VidoRecordStyled>
        <DivVideoStyled>
          <Image className="object-cover" src={Screenshot} />
        </DivVideoStyled>
        <InstructionStyled>Instructions</InstructionStyled>
        <Row>
          <div className="col-1">
            <DivGraterThenIconStyled>
              <GreaterThenIcon />
            </DivGraterThenIconStyled>
          </div>
          <div className="col-11">
            <ParagraphInstructionPoint1Styled>Speak out load and move your head</ParagraphInstructionPoint1Styled>
          </div>
        </Row>
        <Row>
          <div className="col-1">
            <DivGraterThenIconStyled>
              <GreaterThenIcon />
            </DivGraterThenIconStyled>
          </div>
          <div className="col-11">
            <ParagraphInstructionpoint2Styled>Finish actions in 25 seconds.</ParagraphInstructionpoint2Styled>
          </div>
        </Row>
        <DivButtonStyled>
          <ButtonStyled onClick={onClickContinue}>Continue</ButtonStyled>
        </DivButtonStyled>
      </DivMain>
    </>
  );
};

export default VideoRecord;
