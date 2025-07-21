import React from "react";
import { CardProps } from "@/interfaces";
import Image from "next/image";
import { Star } from "lucide-react";


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
  <div className=" rounded hover:shadow-sm mb-10">
    <Image
      src={image}
      alt={title}
      width={400}
      height={200}
      className="w-full h-48 object-cover rounded-2xl mb-3"
    />
    <h2 className="text-xl font-bold mb-1 px-4">{title}</h2>
   
    <div className="flex justify-between gap-4 text-sm mb-2 px-4">
       <div className="text-lg flex-1/2 font-semibold mb-2">${price_perNight} / night</div>
      <div className="flex flex-1/2 gap-2 items-center justify-end"><Star className="text-amber-400 fill-amber-400" style={{height:20,width:20}}/> {rating}</div>
    </div>
    
  </div>
);

export default Card;
