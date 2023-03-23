import React from 'react';
import { SELECT, TEXT_INPUT } from '../common/constants'
import SelectInput from './genericElements/SelectInput/SelectInput'
import TextInput from './genericElements/TextInput/TextInput';

export default function GenericElement({ genericElement }) {
    const { label, type, value } = genericElement;

    const inputComponents = {
        [TEXT_INPUT]: TextInput,
        [SELECT]: SelectInput,
    };

    const InputComponent = inputComponents[type];
    if (!InputComponent) {
        throw new Error(`Invalid input type: ${type}`);
    }

    console.log(`drawing ${type} element`);
    return <InputComponent label={label} value={value} />;
}