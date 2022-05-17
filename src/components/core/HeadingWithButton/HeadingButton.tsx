import React from 'react';

import { Button } from 'react-bootstrap';

import { DivHeader, StyledText } from './HeadingButton.style';
import { IHeaderProps } from './HeadingButton.types';

function HeadingWithButton({ text, onClick }: IHeaderProps) {
  const onIconCLick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <DivHeader className="container">
      <div>
        <StyledText>{text}</StyledText>
      </div>
      <div>
        <Button onClick={onIconCLick}>
          <div className="text">Retake</div>
        </Button>
      </div>
    </DivHeader>
  );
}

export default HeadingWithButton;
