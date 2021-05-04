import styled from 'styled-components';
import React from 'react';


const StyledButton = styled.button<{isLoading?:boolean}>`

  font-weight: 600;
  position: relative;
  display: inline-flex;
  justify-content:center;
  font-size : 15px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  color: #f9fafb;
  background-color: #3182f6;


  border-radius: 3px;
  background-image: none;
  border: 0 solid transparent;

  text-decoration: none;
  transition: background .2s ease,color .1s ease;
  padding: 14px 18px;
  margin: 1px 0 0;

  &:hover {
    background-color : #1b64da;
  }

  &:disabled {
    background-color : #e5e8eb;
    color : #e5e8eb;
  }

  ${props => 
    props.isLoading ? 
    `  &:after {
      content: "";
      position: absolute;
      width: 15px;
      height: 15px;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      border: 4px solid transparent;
      border-top-color: #2272eb;
      border-radius: 50%;
      animation: button-loading-spinner 1s ease infinite;
    } 
  ` : ""
  }

  @keyframes button-loading-spinner {
    from {
      transform: rotate(0turn);
    }
    to {
      transform: rotate(1turn);
    }
`

interface ButtonProps {
    text : string;
    isSelected? : boolean;
    isLoading? : boolean;
}


const Button = ( props : ButtonProps) => {
    const { text, isLoading } = props;
    return (
    <>
      <StyledButton isLoading={isLoading} disabled={isLoading}>
        { text }
      </StyledButton>
    </>)

}

export default Button;