
import styled from 'styled-components';
import React from 'react';
import Input, { InputProps } from './Input';


const StyledInputLabel = styled.label<{isRequired : boolean}>`

    display: block;
    padding: 4px 0;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.6;
    color: #4e5968;
    position: relative;
    margin: 0;

    ${props => props.isRequired ?  
        `&:after { 

            display: inline-block;
            margin: 0 0 2px 6px;
            content: "";
            width: 6px;
            height: 6px;
            background-color: #f44336;
            border-radius: 3px;
        }`:""}
`

interface InputGroupProps extends InputProps {
    text : string;
    isRequired: boolean;
}

const InputGroup = (props : InputGroupProps) => {
    const { text, id , placeholder, isRequired, type } = props;

    return (
    <>
        <StyledInputLabel htmlFor={id} isRequired={isRequired}> 
            {text}
        </StyledInputLabel>
        <Input type={type} id={id} placeholder={placeholder} ></Input>
    </>
    )
}


export default InputGroup;

