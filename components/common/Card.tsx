import React from "react";
import { CardProps } from "@/interfaces";
import Image from "next/image";
import { Star } from "lucide-react";
import Pill from "@/components/common/Pill";

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
      width={350}
      height={200}
      className="w-full h-48 object-cover rounded-2xl mb-3"
    />
    <div className="flex justify-between my-2">
      {features.map((feature, index) => (
        <p
          key={index}
          className="bg-gray-100 rounded-full px-4 py-2 text-gray-700 text-[10px]"
        >
          {feature}
        </p>
      ))}
    </div>
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-bold mb-1 truncate">{title}</h2>
      <p className="text-gray-600">{city}</p>
    </div>

    <div className="flex justify-between gap-4 text-sm mb-2s">
      <div className="text-lg flex-1/2 font-semibold mb-2">
        ${price_perNight} / night
      </div>
      <div className="flex flex-1/2 gap-2 items-center justify-end">
        <Star
          className="text-amber-400 fill-amber-400"
          style={{ height: 20, width: 20 }}
        />{" "}
        {rating}
      </div>
    </div>
  </div>
);

export default Card;
