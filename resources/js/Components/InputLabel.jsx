import React from 'react';

export default function InputLabel({ forInput, value, className, children }) {
    return (
        <label htmlFor={forInput} className={`block font-semibold text-sm text-gray-800 ` + className}>
            {value ? value : children}
        </label>
    );
}
