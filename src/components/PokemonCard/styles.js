import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: ${({ $isGrid }) =>
    $isGrid
      ? 'column'
      : 'row'
  };
  height: 150px;
  padding: 8px;
  border-radius: 12px;
  background-color: ${({ $type, theme  }) =>
    theme.colors.types[$type]?.main
  };
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.25);

  &:active > div > div > img, &:active > div > img {
    scale: 1.2;
    -webkit-filter: drop-shadow(5px 5px 5px #222);
    filter: drop-shadow(5px 5px 5px #222);
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ $justify = 'flex-start'}) => $justify};
  flex: 1;

  div:last-of-type {
    margin-bottom: 0px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const Image = styled.img`
  height: ${({ $isGrid }) => $isGrid ? '90px' : '100%'};
  transition: all .2s;
`;

export const Name = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`;
