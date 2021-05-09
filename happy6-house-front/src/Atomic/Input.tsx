
import styled from 'styled-components';
import React from 'react';

const StyledInputWrapper=  styled.div`
    border-radius: 8px;
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 48px;
    margin: 1px auto 0;
    font-size: 15px;
    line-height: 20px;
    color: #4e5968;
    background-color: #fff;
    border: none;
    outline: none;
    box-shadow: inset 0 0 0 1px rgb(0 27 55 / 10%);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    overflow: hidden;
    transition: background .2s ease,color .1s ease,box-shadow .2s ease;
`


const StyledInput = styled.input`
    flex-grow: 1;
    outline: 0;
    border: 0;
    background: none;
    line-height: 48px;
    font-size: inherit;
    padding: 0 18px;
    height: 100%;
`

const StyledTemp = styled.div`
    padding:15px;
`



export interface InputProps {
    placeholder?: string;
    id? : string;
    type?: string;
}


const Input = ( props : InputProps) => {
    const { placeholder , id, type} = props;
    return (
        <>
            <StyledInputWrapper>
                <StyledInput type={type} id={id} placeholder={placeholder}/>
            </StyledInputWrapper>
        </>
    )
}

export default Input;