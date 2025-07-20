import React from "react";
import { CardProps } from "@/interfaces";
import Image from "next/image";

const Card = ({
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
  <div className=" rounded hover:shadow-sm">
    <Image
      src={image}
      alt={title}
      width={400}
      height={200}
      className="w-full h-48 object-cover rounded-2xl mb-3"
    />
    <h2 className="text-xl font-bold mb-1 px-4">{title}</h2>
   
    <div className="flex justify-between gap-4 text-sm mb-2 px-4">
       <div className="text-lg font-semibold mb-2">${price_perNight} / night</div>
      <span>⭐ {rating}</span>
    </div>
    
  </div>
);

export default Card;
