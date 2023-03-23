import React from 'react'
import GenericElement from '../genericElement/GenericElement';
import './Grid.css';

export default function Grid({ genericElementList }) {
    return (
        <div className='grid'>
            {
                genericElementList.map((genericElement) => (
                    <GenericElement key={Object.values(genericElement).join(",")} genericElement={genericElement} />
                ))
            }
        </div>
    )
}
