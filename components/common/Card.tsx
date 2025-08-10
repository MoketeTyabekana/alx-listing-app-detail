import React from "react";
import { CardProps } from "@/interfaces";
import Image from "next/image";
import { Star } from "lucide-react";
import { BedDouble, Bath, Users } from "lucide-react";
import Link from "next/link";

const Card = ({
  id, // Add id prop
  title,
  price_perNight,
  city,
  image,
  bedrooms,
  bathrooms,
  number_of_guests,
  rating,
  features,
}: CardProps & { children?: React.ReactNode }) => (
  <Link href={`/property/${id}`}>
    <div className="relative rounded-2xl hover:shadow-sm hover:bg-gray-100 transition-all duration-300 mb-10 p-1 cursor-pointer">
      {/* Property image */}
      <Image
        src={image}
        alt={title}
        width={350}
        height={200}
        className="w-full h-48 object-cover rounded-xl mb-3"
      />

      {/* Property Features */}
      <div className="flex justify-between my-2">
        {features.map((feature, index) => (
          <p
            key={index}
            className="bg-gray-50 rounded-full px-4 py-2 text-gray-700 text-[12px]"
          >
            {feature}
          </p>
        ))}
      </div>
      
      {/* property title */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold mb-1 truncate">{title}</h2>
        <p className="text-gray-800">{city}</p>
      </div>

      {/* Price and ratings */}
      <div className="flex justify-between gap-4 text-sm mb-2s">
        <div className="text-lg flex-1/2 font-semibold mb-2">
          ${price_perNight}/n
        </div>
        <div className="flex flex-1/2 gap-2 items-center justify-end">
          <Star
            className="text-amber-400 fill-amber-400"
            style={{ height: 20, width: 20 }}
          />{" "}
          {rating}
        </div>
      </div>

      {/* Bedrooms,Baths and users */}
      <div className="flex justify-between items-center bg-gray-50/50 p-2 mt-2 rounded-full">
        <span className="flex items-center gap-2 text-black">
          <BedDouble height={16} width={16} />
          {bedrooms}
        </span>
        <span className="flex items-center gap-2 text-black">
          <Bath height={16} width={16}/>
          {bathrooms}
        </span>
        <span className="flex items-center gap-2 text-black">
          <Users height={16} width={16} /> 
          {number_of_guests}
        </span>
      </div>
    </div>
  </Link>
);

export default Card;

/* Usage Example:
<Card
  id={property.id}
  title={property.name}
  price_perNight={property.price}
  city={property.address.city}
  image={property.image}
  bedrooms={property.bedrooms}
  bathrooms={property.bathrooms}
  number_of_guests={property.number_of_guests}
  rating={property.rating}
  features={property.features}
/>
*/
