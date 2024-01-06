import styled from "styled-components";

export const Buttom =  styled.buttom`
    display:  flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 65%;
    background-color : ${({theme, $color})=> theme.colors[$color]} ;
    border: none;
    border-radius: 16px;
    font-size: 24px;
    font-weight :600;
    color: ${({theme}) => theme.colors.white};
    transition: all .2s;

    &:disabled{
        opacity:.5;
    }

    &:active:not([disabled]) {
        opacity: .95;
        scale: .95;
    }

`