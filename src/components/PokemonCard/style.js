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
    transition: all .2s;
    
    &:hover > div > div > img{
        scale: 1.2;
        -webkit-filter: drop-shadow(2px 3px 5px #222);
        filter: drop-shadow( 5px 5px 5px #222);

        
    };

     
    &:hover > div > div {
        scale: 1;
        -webkit-filter: drop-shadow(5px 5px 5px #222);
        filter: drop-shadow( 2px 2px 2px #222);

        
    };

     
    &:hover > div >span{
        scale: 1.2;
        -webkit-filter: drop-shadow(2px 2px 2px #222);
        filter: drop-shadow( 3px 5px 2px #222);

        
    }
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
  transition: all .6s;
    
    
`;

export const Name = styled.span`

     font-size: 20px;
     font-weight: 700;
     color: ${({theme}) => theme.colors.white};
`;