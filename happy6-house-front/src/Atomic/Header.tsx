import styled from 'styled-components';
import React from 'react';

const StyledHeader = styled.div<Pick<HeaderProps, "size">>`
    position:relative;
    z-index:5;
    ${props => {
        if (props.size == 'big') {
            return 'font-size: 3rem;'
        } else if (props.size == 'medium') {
            return 'font-size: 2rem;'
        } else {
            return 'font-size: 1rem;'
        }
    }
    }
    font-weight:bolder;
`

interface HeaderProps {
    text : string;
    size : 'big' | 'medium' | 'small';
}

const Header = ( props : HeaderProps ) => {
    const { text, size } = props;
    return (
    <>  
        <StyledHeader size={size}>
            {text}
        </StyledHeader>
    </>)

}

export default Header;