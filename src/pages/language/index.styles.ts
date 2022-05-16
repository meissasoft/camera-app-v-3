import styled from '@emotion/styled';

import { COLORS } from '@/constants/colors';

export const BoxStyled = styled.div`
  padding: 40px 20px;
  list-group-item: list-group-item-action;
  font-family: 'Proxima Nova';
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Proxima Nova';
  justify-content: space-between;
`;

export const StyledLanguage = styled.span<{ isActive: boolean }>`
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;

  ${({ isActive }) =>
    isActive
      ? `background: linear-gradient(90deg, ${COLORS.FAUX_CHINESE_BLUE} 0%, ${COLORS.SKY_100} 35%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;`
      : ''};
`;

export const StyledLine = styled.hr`
  opacity: 0.6;
  font-family: 'Proxima Nova';
  margin: 15px 5px 15px 0px;
  background-color: rgba(0, 0, 0, 0.1);
`;
export const StyledColor = styled.div`
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-family: 'Proxima Nova';
`;
