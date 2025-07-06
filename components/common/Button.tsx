import React from 'react';
import { ButtonProps } from '@/interfaces'


export const Button = ({ label, onClick, type = 'button' }: ButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
  >
    {label}
  </button>
)
