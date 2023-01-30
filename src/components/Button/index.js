import React from 'react';

const Button = ({disabled, onClick, children, className, posts}) => {

    return (
        <div>
            <button className={className} disabled={disabled} onClick={onClick}>{children}</button>
        </div>
    );
};

export default Button;