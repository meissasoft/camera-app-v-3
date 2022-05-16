import styled from '@emotion/styled';

import { COLORS } from '@/constants/colors';

export const FieldInputStyled = styled.div`
  width: 100%;
  color: ${COLORS.GREY_TEXT};
  &.MuiTextField-root > div {
    height: 50px;
    border-radius: 6px;
    background-color: ${COLORS.GREY_4};
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
  }
  &.error {
    border-color: ${COLORS.RED_100};
  }

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: ${COLORS.THEME_BUTTON};
    }
  }
`;
