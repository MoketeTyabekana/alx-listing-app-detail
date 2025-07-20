import React from 'react'
import { CardProps } from '@/interfaces'
import Image from 'next/image'

export const Card = ({
  title,
  price_perNight,
  city,
  image,
  bedrooms,
  bathrooms,
  number_of_guests,
  rating,
  features,
  children,
}: CardProps & { children?: React.ReactNode }) => (

  <div className="border p-4 rounded shadow-sm">
    <Image src={image} alt={title} className="w-full h-48 object-cover rounded mb-3" />
    <h2 className="text-xl font-bold mb-1">{title}</h2>
    <div className="text-gray-600 mb-1">{city}</div>
    <div className="text-lg font-semibold mb-2">${price_perNight} / night</div>
    <div className="flex gap-4 text-sm mb-2">
      <span>{bedrooms} bd</span>
      <span>{bathrooms} ba</span>
      <span>{number_of_guests} guests</span>
      <span>⭐ {rating}</span>
    </div>
    <ul className="flex flex-wrap gap-2 mb-2">
      {features.map((feature, idx) => (
        <li key={idx} className="bg-gray-100 px-2 py-1 rounded text-xs">{feature}</li>
      ))}
    </ul>
    {children}
    
  </div>
)