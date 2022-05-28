import styled from '@emotion/styled';

import { COLORS } from '@/constants/colors';

export const DivMain = styled.div`
  background: ${COLORS.BLACK_200};
  display: flex;
  flex-direction: column;
  width: 100%;

  height: calc(100vh - 40px);
  @media (max-height: 720px) {
    height: calc(100vh - 60px);
  }
  @media (max-height: 670px) {
    height: calc(100vh - 40px);
  }
`;

export const DivTextStyled = styled.div`
  display: flex;
  justify-content: center;
`;

export const DivCameraBox = styled.video`
  width: 100%;
  object-fit: cover;
  @media (max-height: 720px) {
    height: calc(100vh - 60px);
  }
  @media (max-height: 670px) {
    height: calc(100vh - 40px);
  }
`;

export const DivFrontCamContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  position: absolute;
  right: 20px;
  margin-top: 20px;
  height: 140px;
`;

export const DivFrontCam = styled.video`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center
  flex-direction: column;
  width: 120px;
  object-fit: cover;
  border: 1.5px solid ${COLORS.WHITE};
  border-radius: 12px;
`;
export const TextStyled = styled.span`
  color: ${COLORS.WHITE_100};
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  position: absolute;
  bottom: 40px;
  padding: 0px 5px;
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
