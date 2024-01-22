import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 150px;
    padding: 8px;
    border-radius: 12px;
    background-color: ${({$type , theme})=>
        theme.colors.types[$type]?.main
};
    box-shadow: 0px 0px 6px 1px rgba(0,0,0,0.25);
`;

export const Column = styled.div`
   display: flex;
   flex-direction: column;
   flex: 1;

`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
`;

export const Image = styled.img`
    width: 90px;
    height: 90px;
`;

export const Name = styled.span`
     font-size: 24px;
     color: ${({theme}) => theme.colors.white};
`;