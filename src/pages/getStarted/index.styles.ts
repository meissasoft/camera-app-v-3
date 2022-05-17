import styled from '@emotion/styled';

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

export const DivLayout = styled.div<{ isMobile?: boolean }>`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-content  flex-start;
  justify-content: flex-start;
  align-items: center;

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
