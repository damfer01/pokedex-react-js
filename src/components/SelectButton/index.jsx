import styled  from "styled-components";

export const SelectionButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    border: none ;
    background-color: transparent;

    font-size: 24px;
    color: ${({$selected , theme}) => 
    $selected
    ? theme.colors.primary
    : theme.colors.defaultLight
};
    

`;
