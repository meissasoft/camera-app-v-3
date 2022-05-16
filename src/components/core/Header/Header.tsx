import React from 'react';

import LessThenIcon from '@/assets/svg/lessthen-icon';

import { StyledText } from './Header.style';
import { IHeaderProps } from './Header.types';

function Header({ text, onClick }: IHeaderProps) {
  const onIconCLick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-2" onClick={onIconCLick}>
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

export default Header;
