
import ReviewCard from "../common/ReviewCard";
import { Review } from "@/interfaces";

const ReviewSection: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  return (
    <div className="py-10">
      <h3 className="text-2xl font-semibold">Reviews</h3>
      <section className="grid grid-cols-2 gap-6 mt-10">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </section>
    </div>
  );
};

export default ReviewSection;
