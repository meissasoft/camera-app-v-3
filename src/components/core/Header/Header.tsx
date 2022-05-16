import React from 'react';

import { LessThenIcon } from '@/assets/svg/lessthen-icon';

import { StyledText } from './Header.style';

interface Props {
  text: string;
}

export function Heading({ text }: Props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <LessThenIcon />
        </div>
        <div className="col-8">
          <StyledText>{text}</StyledText>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}
