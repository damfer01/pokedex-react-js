import styled from "styled-components";

export const StatsView = styled.div`
  display: flex;
  flex-direction: row;
  width: 125px;
  margin-bottom: 6px;
  border-radius: 6px;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);
  overflow: hidden;

  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`;

export const StatsLabel = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding-left: 12px;
  height: 100%;
`;

export const StatsValue = styled.div`
  height: 100%;
  padding: 6px 8px 6px 12px;
  background-color: ${({ $type, theme  }) =>
    theme.colors.types[$type]?.dark
  };
`;
