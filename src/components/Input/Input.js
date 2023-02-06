import React from 'react';

const Input = ({text, setText, placeholder, className}) => {

    return (
        <div>
            <input
                value={text}
                className={className}
                onChange={e => setText(e.target.value)}
                type='text'
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;