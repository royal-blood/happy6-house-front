import React from 'react';
import Card from './Card';


export type QuoteCardOption = {
    title : string,
    author : string
}
export interface QuoteCardProps {
    option: QuoteCardOption;
    onClicked : () => void;
}

const QuoteCard = () => {
    return (
        <>
            <Card>
                <div>"</div>

                <div>"</div>
            </Card>
        </>
    )
}

export default QuoteCard;