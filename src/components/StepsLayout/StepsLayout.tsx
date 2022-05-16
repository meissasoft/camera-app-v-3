import React from 'react';

import { ArrowRight } from '@/assets/svg/arrow-right';
import { DoneIcon } from '@/assets/svg/done-icon';

import { DivContent, DivHeading, DivIcon, DivLabel, DivStep, DivStepLayout } from './StepsLayout.style';
import { StepsLayoutProps } from './StepsLayout.types';

function StepLayout({ step, content, isDisabled = false, heading, rightIcon, onClick }: StepsLayoutProps) {
  return (
    <DivStepLayout disabled={isDisabled} onClick={onClick}>
      <div className="row d-flex">
        <div className="col-7">
          <DivLabel>
            <DivStep>step{step}</DivStep>
          </DivLabel>
          <DivHeading>{heading}</DivHeading>
          <DivContent>{content}</DivContent>
        </div>
        <DivIcon>
          <div className="col-5 divIcon">
            {rightIcon === 'done' ? <DoneIcon isDisabled={isDisabled} /> : <ArrowRight isDisabled={isDisabled} />}
          </div>
        </DivIcon>
      </div>
    </DivStepLayout>
  );
}

export default StepLayout;
