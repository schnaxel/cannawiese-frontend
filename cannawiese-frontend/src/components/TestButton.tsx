"use client"
import React from 'react';

interface ButtonProps {
    text: string;
}

const TestButton: React.FC<ButtonProps> = ({ text }) => {
    return <button className={'btn btn-tertiary'}>{text}</button>;
};

export default TestButton;