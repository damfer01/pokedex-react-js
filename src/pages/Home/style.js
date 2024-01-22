import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
    
    

`;


export const SelectGridView = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-top: 12px 0px ;

`;

export const GridView = styled.div `
    display: grid;
    grid-template-columns: ${({$isGrid}) => 
    `repeat(${$isGrid ? 2 : 1}, 1fr)`
    };
       
    grid-gap:16px;
    flex:1;
    padding: 0px 16px; 
    overflow: auto ; 
`;
