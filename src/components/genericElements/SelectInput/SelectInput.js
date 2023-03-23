import React from 'react'

export default function SelectInput({ row, col, label, value }) {
    return (
        <div className='select-container'>
            <h3 className='label'>{label}</h3>
            <select>
                {
                    value.map((option, index) => (
                        <option key={index}>{option}</option>
                    ))
                }
            </select>
        </div>
    )
}
