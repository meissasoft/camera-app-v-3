import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const BoxStyled = styled(Box)`
  display: flex;
  position: relative;
  padding: 40px 20px;
  .container {
    height: 100vh;
  }
`;

export const DivFormWrapperContainer = styled.div`
  width: 100%;
  align-self: center;
  .heading {
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: center;
    margin-top: 90px;
  }
`;

export const DivLayout = styled.div<{ isMobile?: boolean }>`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
`;
