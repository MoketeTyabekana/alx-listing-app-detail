import { Review } from "@/interfaces";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";


const ReviewCard: React.FC<{review:Review}> = ({review }) => {
  return (
    <>
      <div className="flex flex-col gap-4 pb-4 mb-4 rounded-md shadow-md p-4 bg-white">
    <div className="flex items-center">
      <Image
        src={review.avatar || "/default-avatar.png"}
        alt={review.user}
        width={52}
        height={52} 
        className="w-12 h-12 rounded-full mr-4"
      />
      <div>
        <p className="font-bold">{review.user}</p>
        <p className="text-gray-800">{review.period}</p>
      </div>
    </div>
    <div className="flex space-x-2 items-center">
      <p className="text-gray-600 text-se">{review.date}</p>
      <p className="text-gray-500">{review.trip}</p>
    </div>
    <p className=" text-justify">{review.comment}</p>
  </div>
    </>
  );
}

export default ReviewCard;