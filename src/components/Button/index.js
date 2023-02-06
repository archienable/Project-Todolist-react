import React from 'react';
import Button from '@mui/material/Button';

const DefButton = ({disabled, onClick, children, className, color = 'success'}) => {

    return (
        <div>
            <Button variant={"contained"} color={color} className={className} disabled={disabled} onClick={onClick}>{children}</Button>
        </div>
    );
};

export default DefButton;