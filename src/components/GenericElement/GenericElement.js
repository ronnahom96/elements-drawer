import React from 'react';
import { SELECT, TEXT_INPUT } from '../../common/constants'
import SelectInput from '../genericElements/SelectInput/SelectInput'
import TextInput from '../genericElements/TextInput/TextInput';
import './GenericElement.css';

export default function GenericElement({ genericElement }) {
    const { row, col, label, type, value } = genericElement;

    const inputComponents = {
        [TEXT_INPUT]: TextInput,
        [SELECT]: SelectInput,
    };

    const drawElement = () => {
        const InputComponent = inputComponents[type];
        if (!InputComponent) {
            throw new Error(`Invalid input type: ${type}`);
        }

        return <InputComponent row={row} col={col} label={label} value={value} />;
    }

    return (
        <div className='generic-element-container'>
            {drawElement()}
        </div>
    )
}