import styled from '@emotion/styled';

import { COLORS } from '@/constants/colors';
import { FONT_SIZES, FONT_WEIGHTS } from '@/constants/fonts';

const NftCardStyled = styled.div`
  background: ${COLORS.WHITE_100};
  box-sizing: border-box;
  box-shadow: 0px 4.8px 4.8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  width: 276.19px;
  height: 261.8px;

  .card-image-container {
    height: 65%;
    position: relative;
    cursor: pointer;
  }

  .card-image {
    width: 100%;
    height: 100%;
    display: block;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  .card-category-label {
    position: absolute;
    background: ${COLORS.WHITE_100};
    padding: 6px 10px;
    border-radius: 10px;
    top: 10px;
    left: 10px;
    font-weight: ${FONT_WEIGHTS.SEMIBOLD};
  }

  .card-content-area {
    padding: 10px;
  }

  .card-content-actions {
    display: flex;
    justify-content: space-between;
  }

  .card-title-text {
    font-size: ${FONT_SIZES.SUB_HEADING_2};
    font-weight: ${FONT_WEIGHTS.SEMIBOLD};
    margin: 5px;
  }

  .card-id-text {
    font-size: ${FONT_SIZES.SUB_HEADING_2};
    font-weight: ${FONT_WEIGHTS.REGULAR};
    color: ${COLORS.GREY_LABEL};
    margin: 5px;
  }
`;

export default NftCardStyled;
