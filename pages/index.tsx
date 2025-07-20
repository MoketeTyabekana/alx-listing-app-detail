import React from "react";
import { BACKGROUND_IMAGE, BUTTON_TEXT } from "@/constants/index";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card"
import { PROPERTYLISTINGSAMPLE } from "@/constants/index";

export default function Home() {
  return (
    <main className="px-10 ">
      <section
        className="w-full hero h-[400px] bg-cover bg-center rounded-2xl mt-10 flex justify-center items-center"
        style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}
      >
        <div className=" w-1/2 text-white  text-center">
          <h1 className="text-6xl font-semibold mb-6">
            Find your favorite place here!
          </h1>
          <p className="text-2xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>

        <Button
          label={BUTTON_TEXT.signUp}
          variant="primary"
          onClick={() => console.log("Signed up")}
          className="text-sm"
        />
      </section>

      <section className=" flex gap-2 mt-10">
        <div className=" flex-2/3 flex justify-between">
          <button className="bg-gray-50 rounded-full px-4 py-2 text-gray-950 border-1 border-gray-200 ">
            All
          </button>
          <button className="bg-gray-50 rounded-full px-4 py-2 text-gray-950 border-1 border-gray-200 ">
            Top Villa
          </button>
          <button className="bg-gray-50 rounded-full px-4 py-2 text-gray-950 border-1 border-gray-200 ">
            Free Reschedule
          </button>
          <button className="bg-gray-50 rounded-full px-4 py-2 text-gray-950 border-1 border-gray-200 ">
            Book Now, Pay Later
          </button>
          <button className="bg-gray-50 rounded-full px-4 py-2 text-gray-950 border-1 border-gray-200 ">
            Self CheckIn
          </button>
          <button className="bg-gray-50 rounded-full px-4 py-2 text-gray-950 border-1 border-gray-200 ">
            Instant Book
          </button>
        </div>
        <div className="flex-1/3"></div>
      </section>

      <section className="w-full  py-6 grid grid-cols-4 gap-4">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
  <Card
    key={index}
    title={property.name}
    price_perNight={property.price}
    city={property.address.city}
    image={property.image}
    bedrooms={Number(property.offers.bed)}
    bathrooms={Number(property.offers.shower)}
    number_of_guests={property.offers.occupants}
    rating={property.rating}
    features={property.category}
  />
))}
      </section>
    </main>
  );
}
