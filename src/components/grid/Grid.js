import React from 'react'
import GenericElement from '../genericElement/GenericElement';
import './Grid.css';

export default function Grid({ rowNum, colNum, genericElementList }) {
    return (
        <div className='grid-container' style={{
            gridTemplateRows: `repeat(${rowNum}, 1fr)`,
            gridTemplateColumns: `repeat(${colNum}, 1fr)`
        }}>
            {
                genericElementList.map((genericElement) => (
                    <div key={Object.values(genericElement).join(",")}
                        style={{ gridRowStart: genericElement.row, gridColumnStart: genericElement.col }}>
                        <GenericElement genericElement={genericElement} />
                    </div>
                ))
            }
        </div>
    )
}
