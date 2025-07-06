import React from 'react'
import { CardProps } from '@/interfaces'

export const Card = ({ title, description, children }: CardProps) => (
  <div className="border p-4 rounded shadow-sm">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p className="text-gray-700">{description}</p>
    {children}
  </div>
)