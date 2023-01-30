import React from 'react';

const Input = ({text, setText}) => {
    return (
        <div>
            <input
                value={text}
                onChange={e => setText(e.target.value)}
                type='text'
                placeholder='введите текст'/>
        </div>
    );
};

export default Input;