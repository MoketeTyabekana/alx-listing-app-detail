import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail, {Description} from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";




export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  const property = PROPERTYLISTINGSAMPLE.find((item) => String(item.id) === String(id));
  

  if (!property) return <p>Property not found</p>;

  return (
    <main className="lg:px-10 px-2 overflow-x-hidden">
      <PropertyDetail property={property} />
      <div className="flex flex-col lg:flex-row gap-6 mt-10">
        <Description property={property}  />
        <BookingSection price={property.price} />
      </div>
      <ReviewSection reviews={property.reviews ?? []} />
    </main>
  );
} 
