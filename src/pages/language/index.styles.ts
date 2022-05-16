import styled from '@emotion/styled';

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

export const StyledLanguage = styled.span`
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  background: linear-gradient(90deg, #38568f 0%, #38a1f7 93.85%);
  -webkit-background-clip: text;
`;

export const StyledLine = styled.hr`
  opacity: 0.6;
  font-family: 'Proxima Nova';
  margin: 10px 5px 10px 0px;
  background-color: rgba(0, 0, 0, 0.1);
`;
export const StyledColor = styled.div`
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-family: 'Proxima Nova';
`;
// export const ButtonStyled = styled.button<{
//   buttonStyle?: IButtonProps['buttonStyle'];
//   fullWidth?: boolean;
//   withArrow?: boolean;
// }>`
//   ${({ buttonStyle }) => {
//     if (buttonStyle === 'dark') {
//       return css`
//       -webkit-text-fill-color: transparent;
//       background-clip: text;
//       text-fill-color: transparent;
//       `;
//     }
//     };
// export const Item = styled.div`
//    color: black;
//    &.selected {
//     red
//    }
// `;
