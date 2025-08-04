import { PropertyProps } from "@/interfaces/index";
import Image from "next/image";
import { Star, MapPin } from "lucide-react";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({
  property,
}) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="flex items-center space-x-2 my-4">
        <Star className=" text-gray-900" style={{ height: 20, width: 20 }} />{" "}
        <span className="text-gray-900">{property.rating}</span>
        <span className="text-gray-600">
          {property.reviews && `(${property.reviews.length} reviews)`}
        </span>
        <MapPin className="text-gray-900" style={{ height: 20, width: 20 }} />
        <span>
          {property.address.city}, {property.address.country}
        </span>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[500px]">
        {/* Main Image */}
        <div className="col-span-2 row-span-2 relative">
          <Image
            src={property.images?.main || "/placeholder.jpg"}
            alt="Main property view"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-md"
          />
        </div>

        {/* Other Images */}
        {(property.images?.others?.length ?? 0) > 0 &&
          property.images?.others?.map((src, idx) => (
            <div key={idx} className="relative h-full">
              <Image
                src={src}
                alt={`Property view ${idx + 1}`}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-md"
              />
            </div>
          ))}
      </div>

      {/* Description */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p>{property.description}</p>
      </div>

      {/* Amenities */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">What this place offers</h2>
        <ul className="flex flex-wrap space-x-4">
          {property.category?.map((amenity: string, index: number) => (
            <li key={index} className="bg-gray-200 p-2 rounded-md">
              {amenity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PropertyDetail;
