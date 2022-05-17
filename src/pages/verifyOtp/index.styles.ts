import styled from '@emotion/styled';

import { COLORS } from '@/constants/colors';

export const DivMain = styled.div`
  padding: 20px 0px;
  .otpOutput {
    margin: 0;
    font-family: inherit;
    font-size: 30px;
    font-weight: 700;
    line-height: 36.5px;
    width: 50px;
    border: none;
    background: linear-gradient(90.81deg, #38568f 10%, #38a1f7 75.3%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    border-bottom: 2px solid #f6f8f9;
    margin-right: 10px;
    text-align: center;
    outline: none;
    caret-color: linear-gradient(90.81deg, #38568f 10%, #38a1f7 75.3%);
  }
  .textspan: {
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    color: #121212;
    opacity: 0.6;
  }
  .otpOutput:focus {
    border-bottom: 2px solid #0000;
    background: linear-gradient(white, white) padding-box,
      linear-gradient(to left, ${COLORS.SKY_100}, ${COLORS.FAUX_CHINESE_BLUE}) border-box;
    margin-right: 10px;
    text-align: center;
    outline: none;
  }
  .btn {
    padding: 0px 8px;
  }

  .btn-primary {
    outline: none;
    background-color: #e2ecf3;
    border-color: #e2ecf3;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
  }
  .btn-primary:focus {
    outline: none;
  }
  .text {
    background: linear-gradient(90deg, ${COLORS.FAUX_CHINESE_BLUE} 0%, ${COLORS.SKY_100} 85%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;

export const BoxStyled = styled.div`
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

export const DivInner = styled.div<{ isMobile?: boolean }>`
  padding: 20px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-content  flex-start;
  justify-content: flex-start;
  align-items: center;
  margin-top:10px;
  background: #ffff;
  box-shadow: 0px -11px 13px rgba(0, 0, 0, 0.06);
  border-radius: 20px 20px 0px 0px;
  position: relative;

  .newText: {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #121212;
    border:1px solid red;
    opacity: 0.6;
  }

  

  .crossIcon{
    position:absolute;
    right: 12px;
    top: 24px;
  }
  .separator{
    display: flex;
  align-items: center;
  text-align: center;
  }
  .separator::before,
  .separator::after {
  content: '';
    border: 1px solid #000;
}

.separator:not(:empty)::before {
  margin-right: .25em;
}

.separator:not(:empty)::after {
  margin-left: .25em;
}
`;

export const otpInput = styled.div`

 
  },
`;

export const MobileSvg = styled.div<{ isMobile?: boolean }>`
  position: absolute;
  width: 156px;
  height: 156px;
  left: 110px;
  top: 128px;
`;
export const Form = styled.div<{ isMobile?: boolean }>`
  position: absolute;
  width: 156px;
  height: 156px;
  left: 110px;
  top: 128px;
`;
