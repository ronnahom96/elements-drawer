import React from 'react'

export default function TextInput({ label, value }) {
    return (
        <div className='text-input-container'>
            <h3 className='label'>{label}</h3>
            <input type='text' placeholder={value[0]} />
        </div>
    )
}
