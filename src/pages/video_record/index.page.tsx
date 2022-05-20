import Image from 'next/image';
import router from 'next/router';

import React from 'react';

import Screenshot from '@/assets/png/video.png';
import { GreaterThenIcon } from '@/assets/svg/greaterthen-icon';
import Button from '@/components/core/Button';
import Header from '@/components/core/Header';

import {
  DivGraterThenIconStyled,
  DivHomeButton,
  DivMain,
  DivRappingStyled,
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
        <DivRappingStyled>
          <InstructionStyled>Instructions</InstructionStyled>
          <div className="row">
            <DivGraterThenIconStyled className="col-1">
              <GreaterThenIcon />
            </DivGraterThenIconStyled>
            <ParagraphInstructionPoint1Styled className="col-11">
              Speak out load and move your head
            </ParagraphInstructionPoint1Styled>
          </div>
          <div className="row">
            <DivGraterThenIconStyled className="col-1">
              <GreaterThenIcon />
            </DivGraterThenIconStyled>
            <ParagraphInstructionpoint2Styled className="col-11">
              Finish actions in 25 seconds.
            </ParagraphInstructionpoint2Styled>
          </div>
        </DivRappingStyled>
      </DivMain>
      <div>
        <DivHomeButton>
          <Button isBottom onClick={onClickContinue} className="m-auto">
            Continue
          </Button>
        </DivHomeButton>
      </div>
    </>
  );
};

export default VideoRecord;
