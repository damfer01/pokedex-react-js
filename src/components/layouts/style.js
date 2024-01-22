import styled from "styled-components";

 export const  AppSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.colors.white};
 
 `;
  export  const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
  `;
