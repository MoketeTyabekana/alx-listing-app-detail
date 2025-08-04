import { PropertyProps, Review } from "@/interfaces";
import Image from "next/image";
import React from "react";


const ReviewCard: React.FC<{review:Review}> = ({review }) => {
  return (
    <div className="border-b pb-4 mb-4 grid grid-cols-2 gap-4">
      <div className="flex items-center">
        <Image
          src={review.avatar || "/default-avatar.png"}
          alt={review.user}
          width={48} // Add width
          height={48} // Add height
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <p className="font-bold">{review.user}</p>
          <p className="text-gray-800">{review.period} stars</p>
        </div>
      </div>
      <div className="flex space-x-2 items-center">
        <p className="text-gray-600">{review.date}</p>
        <p className="text-gray-500">{review.trip}</p>
      </div>
      <p className=" ">{review.comment}</p>
    </div>
  );
}

export default ReviewCard;