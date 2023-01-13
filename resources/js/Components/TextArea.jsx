import React, { useEffect, useRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

export default function TextArea({
    rows= 1,
    type = 'text',
    name,
    value,
    className,
    autoComplete,
    required,
    isFocused,
    handleChange,
    placeholder
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <TextareaAutosize
                type={type}
                name={name}
                value={value}
                className={
                    `border-gray-300 focus:border-orange  focus:ring-orange focus:ring-opacity-50 rounded-md shadow-sm py-1 ` +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                placeholder={placeholder}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
}
