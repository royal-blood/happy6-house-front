import React from 'react';
import Styled from './CardStyles';


export interface CardProps {
    children : React.ReactNode;
    onClicked? : () => void;
}

const Card = ( props : CardProps ) => {
    const { children, onClicked } = props;
    return (
    <>  
        <Styled.Container onClick={onClicked}>
            {children}
        </Styled.Container>
    </>)
}

export default Card;