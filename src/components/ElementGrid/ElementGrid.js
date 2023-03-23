import React from 'react'
import GenericElement from '../GenericElement/GenericElement';
import './GenericElementGrid.css';

export default function GenericElementGrid({ genericElementList }) {
    return (
        <div className='generic-element-grid'>
            {
                genericElementList.map((genericElement) => (
                    <GenericElement key={Object.values(genericElement).join(",")} genericElement={genericElement} />
                ))
            }
        </div>
    )
}
