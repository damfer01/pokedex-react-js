import styled from "styled-components";

import pokeball from '../../assets/poke-bolll.svg';



export const AuthLayout = styled.section`

width: 100%;
height: 100%;
background: url(${pokeball});
background-position: center;
background-size: contain;
background-repeat: no-repeat;
background-clip: border-box;
background-color:#2f5694 ;
background-color: ${({ theme }) => theme.colors.primary};
`;