import styled from '@emotion/styled';
export const DivMain = styled.div`
  padding: 20px;
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
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  .loginInput {
    border: 1.2px solid #000000;
    border-radius: 5px;
    box-sizing: border-box;
  }
  .separator {
    display: flex;
    align-items: center;
    text-align: center;
    width: 100%;
    text-align: center;
    align-content: center;
    .separatorText {
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
      color: #121212;
      opacity: 0.4;
    }
  }

  .separator::before,
  .separator::after {
    display: block;
    content: '';
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    height: 10px;
    margin-top: -8px;
  }
  .separator:not(:empty)::before {
    margin-right: 0.25em;
  }
  .separator:not(:empty)::after {
    margin-left: 0.25em;
  }
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
