import React from 'react';

const Button = ({ label, onClick, className }) => {
    return <button onClick={onClick}>{label}</button>
};

export default Button;