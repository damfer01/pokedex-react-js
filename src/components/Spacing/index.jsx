import styled from "styled-components";

export const Spacing = styled.div`
  width: 100%;
  ${({
    $top = 0,
    $right = 0,
    $bottom = 0,
    $left = 0,
    $fullWidth = false,
  }) => `
    width: ${$fullWidth ? '100%' : 'auto'};
    margin-top: ${$top}px;
    margin-right: ${$right}px;
    margin-bottom: ${$bottom}px;
    margin-left: ${$left}px;
  `}
`;
