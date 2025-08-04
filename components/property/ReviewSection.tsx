import Image from "next/image";
import ReviewCard from '../common/ReviewCard';
import { Review } from "@/interfaces";

const ReviewSection = () => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold">Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} className="border-b pb-4 mb-4 grid grid-cols-2 gap-4">
      
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;