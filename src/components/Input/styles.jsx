import styled from "styled-components";

export const InputView = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 52px;
  overflow: hidden;
  border: solid 1px ${({ theme, $error }) => $error
    ? theme.colors.danger
    : theme.colors.secondary
  };
  border-radius: 8px;

  & > input {
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    // vertical - horizontal
    margin: 4px 0px;
    // vertical - horizontal
    padding: 0px 8px;

    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.secondary};
  }

  & > input::placeholder {
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.placeholder};
    opacity: .5;
  }
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0px 8px;
  border: none;
  background-color: transparent;
  transition: all .4s;

  & > svg {
    font-size: 24px;
    color: ${({ theme, $error }) => $error
      ? theme.colors.danger
      : theme.colors.secondary
    };
  }

  &:active > svg {
    opacity: .8;
    scale: .95;
  }
`;

export const Label = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.danger};
`;
