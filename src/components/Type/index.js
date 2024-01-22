
import styled from "styled-components";

export const Type = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 12px;
    margin-bottom: 8px;
    border-radius:6px;
    background-color: ${({$type , theme} ) =>
    theme.colors.types[$type]?.dark
    };

    font-size: 12px;
    font-weight: 600;
    color: ${({theme}) => theme.colors.white};
    box-shadow: 0px , 0px  ,4px , 1px rgba(0,0,0,0.25)
`;