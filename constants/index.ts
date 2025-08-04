import { PropertyProps } from "@/interfaces";

export const BUTTON_TEXT = {
  all: "All",
  topVilla: "Top Villa",
  freeReschedule: "Free Reschedule",
  bookNowPayLater: "Book Now, Pay later",
  selfCheckin: "Self CheckIn",
  instantBook: "Instant Book",
  filter: "Filter",
  sortByHighestPrice: "Sort by: Highest Price",

  submit: "Submit",
  cancel: "Cancel",
  delete: "Delete",
  edit: "Edit",
  addToCart: "Add to Cart",
  viewCart: "View Cart",
  showMore: "Show More",
  signIn: "Sign In",
  signUp: "Sign Up",
  moreInfo: "More Info",
  goBackHome:"Go Back To Home Page"
};

export const UI_TEXT={
    CARD: {
        TITLE:'Item Title',
        PRICE_PER_NIGHT: 'Price',
        CITY: 'City',
        IMAGE: 'Image',
        BEDROOMS: 'Bedrooms',
        BATHROOMS: 'Bathrooms',
        NUMBER_OF_GUESTS: 'Number of guests',
        RATING: 'Rating',
        FEATURES:["Top Villa", "Self CheckIn", "Free Reschedule"],

        
    },

    SEARCH:{
        DESTINATION: 'Destination',
        CHECK_IN: 'Check-in Date',
        CHECK_OUT: 'Check-out Date',
        GUESTS: 'Guests',
        SEARCH: 'Search',
    },

    ERROR_MESSAGES: {
        REQUIRED_FIELD: 'This field is required.',
        INVALID_EMAIL: 'Please enter a valid email address.',
    },

    SUCCESS_MESSAGES: {
        ITEM_ADDED: 'Item successfully added to cart.',
        ITEM_UPDATED: 'Item successfully updated.',
    },

    EXPLORE:{
        APARTMENTS_IN_DUBAI: 'Apartments in Dubai',
        APARTMENTS_IN_NEWYORK: 'Apartments in New York',
        APARTMENTS_IN_SPAIN: 'Apartments in Spain',
        APARTMENTS_IN_INDONESIA: 'Apartments in Indonesia',
    },

    COMPANY:{
        ABOUT_US:'About Us',
        BLOG:'Blog',
        CAREER: 'Career',
        CUSTOMERS:'Customers',
        BRAND:'Brand',
    },

    HELP:{
        SUPPORT: 'Support',
        CANCEL_BOOKING: 'Cancel Booking',
        REFUNDS_PROCESS: 'Refunds Process',
    },

    FOOTER: {
        TERMS_OF_SERVICE: 'Terms of Service',
        POLICY_SERVICE: 'Policy Service',
        COOKIES_POLICY: 'Cookies Policy',
        PARTNERS: 'Partners',
    },

   
    PROPERTY_CATEGORIES: [
        { label: 'Rooms', icon: 'rooms' },
        { label: 'Mansion', icon: 'mansion' },
        { label: 'Countryside', icon: 'countryside' },
        { label: 'Villa', icon: 'villa' },
        { label: 'Tropical', icon: 'tropical' },
        { label: 'New', icon: 'new' },
        { label: 'Amazing pool', icon: 'pool' },
        { label: 'Beach house', icon: 'beach-house' },
        { label: 'Island', icon: 'island' },
        { label: 'Camping', icon: 'camping' },
        { label: 'Apartment', icon: 'apartment' },
        { label: 'House', icon: 'house' },
        { label: 'Lakefront', icon: 'lakefront' },
        { label: 'Farm house', icon: 'farm-house' },
        { label: 'Treehouse', icon: 'treehouse' },
        { label: 'Cabins', icon: 'cabins' },
        { label: 'Castles', icon: 'castles' },
        { label: 'Lakeside', icon: 'lakeside', disabled: true },
    ]
}


export const PROPERTYLISTINGSAMPLE: PropertyProps []  =  [
  {
   
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "/assets/image7.png",
    images: {
    main: "/assets/image2.png",
    others: [
      "/assets/image3.png",
      "/assets/image4.png",
      "/assets/image5.png",
       "/assets/image6.png"
    ]
  },
    discount: "",
    description: "A luxurious villa with a beautiful pool and ocean breeze, perfect for families or groups seeking relaxation in Bali.",
    bedrooms: 3,
    bathrooms: 3,
    number_of_guests: "6",
    features: ["Luxury Villa", "Pool", "Free Parking"],
    reviews: [
      {
        user: "Alice",
        avatar: "/assets/avatar1.png",
        rating: 5,
        comment: "Amazing villa, beautiful pool and great service!"
      },
      {
        user: "Bob",
        avatar: "/assets/avatar2.png",
        rating: 4,
        comment: "Very comfortable and clean. Would stay again."
      }
    ]
  },
  {
    
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA"
    },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "/assets/image15.png",
    images: {
    main: "/assets/image2.png",
    others: [
      "/assets/image3.png",
      "/assets/image4.png",
      "/assets/image5.png"
    ]
  },

    discount: "30",
    description: "A cozy mountain chalet in Aspen with stunning views, a fireplace, and easy self check-in for ski lovers.",
    bedrooms: 4,
    bathrooms: 2,
    number_of_guests: "7",
    features: ["Mountain View", "Fireplace", "Self Checkin"],
    reviews: [
      {
        user: "Charlie",
        avatar: "/assets/avatar3.png",
        rating: 5,
        comment: "Perfect for a ski trip. Loved the fireplace!"
      }
    ]
  },
  {
  
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA"
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "/assets/image8.png",
    images: {
    main: "/assets/image2.png",
    others: [
      "/assets/image3.png",
      "/assets/image4.png",
      "/assets/image5.png"
    ]
  },

    discount: "",
    description: "A charming desert retreat with stunning views, perfect for couples or small families. Enjoy the tranquility and beauty of the desert landscape.",
    bedrooms: 2,
    bathrooms: 1,
    number_of_guests: "3",
    features: ["Desert View", "Pet Friendly", "Self Checkin"],
    reviews: [
      {
        user: "Dana",
        avatar: "/assets/avatar4.png",
        rating: 5,
        comment: "Charming and peaceful. Loved the desert views!"
      }
    ]
  },
  {
 
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA"
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "/assets/image2.png",
    images: {
    main: "/assets/image2.png",
    others: [
      "/assets/image3.png",
      "/assets/image4.png",
      "/assets/image5.png"
    ]
  },

    discount: "15",
    description: "Experience the vibrant city life in this modern penthouse with breathtaking views of the New York skyline. Ideal for couples or business travelers.",
    bedrooms: 2,
    bathrooms: 2,
    number_of_guests: "4",
    features: ["City View", "Free WiFi", "24h Checkin"],
    reviews: [
      {
        user: "Eve",
        avatar: "/assets/avatar5.png",
        rating: 4,
        comment: "Amazing view and location. Would recommend!"
      }
    ]
  },
  {
  
    name: "Riverside Cabin",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand"
    },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6"
    },
    image: "/assets/image2.png",
    images: {
    main: "/assets/image2.png",
    others: [
      "/assets/image3.png",
      "/assets/image4.png",
      "/assets/image5.png"
    ]
  },

    discount: "20",
    description: "Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded sandy coves for swimming and paddleboarding... [Trimmed for clarity]",
    bedrooms: 3,
    bathrooms: 2,
    number_of_guests: "6",
    features: ["Riverside", "Private Dock", "Free Kayaks"],
    reviews: [
      {
        user: "Frank",
        avatar: "/assets/avatar6.png",
        rating: 5,
        comment: "Kayaks were a fun bonus. Peaceful location."
      }
    ]
  },
  {
  
    name: "Modern Beachfront Villa",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10"
    },
    image: "/assets/image4.png",
    images: {
    main: "/assets/image2.png",
    others: [
      "/assets/image3.png",
      "/assets/image4.png",
      "/assets/image5.png"
    ]
  },

    discount: "",
    description: "A stunning beachfront villa with private pool and chef service. Ideal for large families or groups seeking a luxurious getaway.",
    bedrooms: 5,
    bathrooms: 4,
    number_of_guests: "10",
    features: ["Beachfront", "Private Pool", "Chef Service"],
    reviews: [
      {
        user: "Grace",
        avatar: "/assets/avatar7.png",
        rating: 5,
        comment: "The chef service was fantastic. Beautiful villa!"
      }
    ]
  },
  {
  
    name: "Lakeside Chalet",
    address: {
      state: "Banff",
      city: "Alberta",
      country: "Canada"
    },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "/assets/image5.png",
    images: {
    main: "/assets/image2.png",
    others: [
      "/assets/image3.png",
      "/assets/image4.png",
      "/assets/image5.png"
    ]
  },
    discount: "10",
    description: "A beautiful lakeside chalet with stunning mountain views and access to hiking trails. Perfect for outdoor enthusiasts.",
    bedrooms: 3,
    bathrooms: 3,
    number_of_guests: "5",
    features: ["Lakeside", "Mountain View", "Hiking Trails"],
    reviews: [
      {
        user: "Hannah",
        avatar: "/assets/avatar8.png",
        rating: 5,
        comment: "Loved the hiking trails and the view!"
      }
    ]
  },
  {
  
    name: "Tropical Garden Villa",
    address: {
      state: "Koh Samui",
      city: "Surat Thani",
      country: "Thailand"
    },
    rating: 4.80,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "5-6"
    },
    image: "/assets/image6.png",
    images: {
    main: "/assets/image2.png",
    others: [
      "/assets/image3.png",
      "/assets/image4.png",
      "/assets/image5.png"
    ]
  },

    discount: "25",
    description: "A tropical villa surrounded by lush gardens, offering a serene escape with free parking and self check-in.",
    bedrooms: 3,
    bathrooms: 3,
    number_of_guests: "6",
    features: ["Garden", "Free Parking", "Self Checkin"],
    reviews: [
      {
        user: "Ivan",
        avatar: "/assets/avatar9.png",
        rating: 5,
        comment: "Beautiful gardens and easy check-in."
      }
    ]
  },
  {
  
    name: "Urban Loft",
    address: {
      state: "Berlin",
      city: "Berlin",
      country: "Germany"
    },
    rating: 4.60,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "/assets/image7.png",
    images: {
    main: "/assets/image2.png",
    others: [
      "/assets/image3.png",
      "/assets/image4.png",
      "/assets/image5.png"
    ]
  },

    discount: "",
    description: "A stylish urban loft in the heart of Berlin, featuring modern amenities, free WiFi, and 24-hour check-in.",
    bedrooms: 2,
    bathrooms: 1,
    number_of_guests: "3",
    features: ["City Center", "Free WiFi", "24h Checkin"],
    reviews: [
      {
        user: "Julia",
        avatar: "/assets/avatar10.png",
        rating: 4,
        comment: "Great location and amenities."
      }
    ]
  },
  {
  
    name: "Secluded Forest Cabin",
    address: {
      state: "Whistler",
      city: "British Columbia",
      country: "Canada"
    },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "/assets/image8.png",
    images: {
    main: "/assets/image2.png",
    others: [
      "/assets/image3.png",
      "/assets/image4.png",
      "/assets/image5.png"
    ]
  },

  
    description: "A secluded cabin in the forest with a hot tub and self check-in. Ideal for a relaxing retreat in nature.",
    bedrooms: 4,
    bathrooms: 2,
    number_of_guests: "7",
    features: ["Secluded", "Hot Tub", "Self Checkin"],
    reviews: [
      {
        user: "Kevin",
        avatar: "/assets/avatar11.png",
        rating: 5,
        comment: "Hot tub was a highlight. Very peaceful."
      }
    ]
  },
  {
  
    name: "Cliffside Villa",
    address: {
      state: "Amalfi",
      city: "Salerno",
      country: "Italy"
    },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "/assets/image9.png",
    images: {
    main: "/assets/image2.png",
    others: [
      "/assets/image3.png",
      "/assets/image4.png",
      "/assets/image5.png"
    ]
  },

    discount: "50",
    description: "An exquisite cliffside villa with an infinity pool and breathtaking sea views. Perfect for a luxurious getaway.",
    bedrooms: 4,
    bathrooms: 4,
    number_of_guests: "8",
    features: ["Cliffside", "Infinity Pool", "Sea View"],
    reviews: [
      {
        user: "Liam",
        avatar: "/assets/avatar12.png",
        rating: 5,
        comment: "Infinity pool and views were amazing!"
      }
    ]
  },
  {
  
    name: "Coastal Escape Villa",
    address: {
      state: "Noosa",
      city: "Queensland",
      country: "Australia"
    },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "/assets/image18.png",
    images: {
    main: "/assets/image2.png",
    others: [
      "/assets/image3.png",
      "/assets/image4.png",
      "/assets/image5.png"
    ]
  },

    discount: "",
    description: "A beachfront villa in Noosa with pet-friendly policies and free parking. Ideal for families and pets.",
    bedrooms: 3,
    bathrooms: 3,
    number_of_guests: "6",
    features: ["Beachfront", "Pet Friendly", "Free Parking"],
    reviews: [
      {
        user: "Mia",
        avatar: "/assets/avatar13.png",
        rating: 5,
        comment: "Perfect for our family and dog!"
      }
    ]
  },
  {
  
    name: "Historical Villa",
    address: {
      state: "Florence",
      city: "Tuscany",
      country: "Italy"
    },
    rating: 4.67,
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    price: 2700,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "/assets/image17.png",
    images: {
    main: "/assets/image2.png",
    others: [
      "/assets/image3.png",
      "/assets/image4.png",
      "/assets/image5.png"
    ]
  },

    discount: "35",
    description: "A charming historical villa in Tuscany with free breakfast and self check-in. Experience the beauty of the Italian countryside.",
    bedrooms: 2,
    bathrooms: 2,
    number_of_guests: "4",
    features: ["Historical", "Free Breakfast", "Self Checkin"],
    reviews: [
      {
        user: "Nina",
        avatar: "/assets/avatar14.png",
        rating: 5,
        comment: "Loved the breakfast and the history!"
      }
    ]
  },
  {
  
    name: "Downtown Apartment",
    address: {
      state: "Tokyo",
      city: "Tokyo",
      country: "Japan"
    },
    rating: 4.81,
    category: ["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2"
    },
    image: "/assets/image16.png",
    images: {
    main: "/assets/image2.png",
    others: [
      "/assets/image3.png",
      "/assets/image4.png",
      "/assets/image5.png"
    ]
  },

    discount: "",
    description: "A modern apartment in downtown Tokyo, close to public transport and major attractions. Ideal for city explorers.",
    bedrooms: 1,
    bathrooms: 1,
    number_of_guests: "2",
    features: ["City Center", "Free WiFi", "Public Transport"],
    reviews: [
      {
        user: "Oscar",
        avatar: "/assets/avatar15.png",
        rating: 4,
        comment: "Convenient location, clean and modern."
      }
    ]
  },
  {
  
    name: "Luxury Safari Lodge",
    address: {
      state: "Serengeti",
      city: "Mara",
      country: "Tanzania"
    },
    rating: 4.97,
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    price: 4500,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "/assets/image15.png",
    discount: "20",
    description: "An exclusive safari lodge in the Serengeti, offering guided tours and free breakfast. Experience the thrill of a wildlife safari.",
    bedrooms: 4,
    bathrooms: 4,
    number_of_guests: "8",
    features: ["Safari", "Guided Tours", "Free Breakfast"],
    reviews: [
      {
        user: "Priya",
        avatar: "/assets/avatar16.png",
        rating: 5,
        comment: "Safari tours were unforgettable!"
      }
    ]
  },
  {
  
    name: "Countryside Cottage",
    address: {
      state: "Cotswolds",
      city: "Gloucestershire",
      country: "UK"
    },
    rating: 4.58,
    category: ["Countryside", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-4"
    },
    image: "/assets/image10.png",
    discount: "25",
    description: "A cozy countryside cottage with a fireplace and self check-in. Perfect for a romantic getaway or a peaceful retreat.",
    bedrooms: 2,
    bathrooms: 1,
    number_of_guests: "4",
    features: ["Countryside", "Fireplace", "Self Checkin"],
    reviews: [
      {
        user: "Quinn",
        avatar: "/assets/avatar17.png",
        rating: 5,
        comment: "Fireplace made it so cozy!"
      }
    ]
  },
  {
  
    name: "Riverfront Mansion",
    address: {
      state: "Paris",
      city: "Île-de-France",
      country: "France"
    },
    rating: 4.86,
    category: ["Riverfront", "Private Garden", "Self Checkin"],
    price: 5000,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8"
    },
    image: "/assets/image13.png",
    discount: "30",
    description: "An elegant mansion by the river in Paris, featuring a private garden and self check-in. Experience luxury and comfort.",
    bedrooms: 4,
    bathrooms: 3,
    number_of_guests: "8",
    features: ["Riverfront", "Private Garden", "Self Checkin"],
    reviews: [
      {
        user: "Rosa",
        avatar: "/assets/avatar18.png",
        rating: 5,
        comment: "Beautiful garden and river views."
      }
    ]
  },
  {
  
    name: "Ski Chalet",
    address: {
      state: "Zermatt",
      city: "Valais",
      country: "Switzerland"
    },
    rating: 4.75,
    category: ["Mountain View", "Ski Access", "Fireplace"],
    price: 3900,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "/assets/image12.png",
    discount: "",
    description: "A charming ski chalet in Zermatt with mountain views, ski access, and a cozy fireplace. Ideal for winter sports enthusiasts.",
    bedrooms: 3,
    bathrooms: 3,
    number_of_guests: "5",
    features: ["Mountain View", "Ski Access", "Fireplace"],
    reviews: [
      {
        user: "Sam",
        avatar: "/assets/avatar19.png",
        rating: 5,
        comment: "Perfect for skiing. Warm and inviting."
      }
    ]
  },
  {
   
    name: "Island Paradise Villa",
    address: {
      state: "Mahe",
      city: "Victoria",
      country: "Seychelles"
    },
    rating: 4.98,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 6500,
    offers: {
      bed: "5",
      shower: "5",
      occupants: "8-10"
    },
    image: "/assets/image11.png",
    discount: "60",
    description: "An absolute paradise villa in Seychelles with beachfront access, private pool, and chef service. Perfect for a luxurious escape.",
    bedrooms: 5,
    bathrooms: 5,
    number_of_guests: "10",
    features: ["Beachfront", "Private Pool", "Chef Service"],
    reviews: [
      {
        user: "Tina",
        avatar: "/assets/avatar20.png",
        rating: 5,
        comment: "Absolute paradise. Chef was amazing!"
      }
    ]
  },
  {
  
    name: "Clifftop Retreat",
    address: {
      state: "Cape Town",
      city: "Western Cape",
      country: "South Africa"
    },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "/assets/image10.png",
    discount: "",
    description: "A stunning clifftop retreat in Cape Town with ocean views, private pool, and self check-in. Ideal for a luxurious and private getaway.",
    bedrooms: 3,
    bathrooms: 3,
    number_of_guests: "5",
    features: ["Ocean View", "Private Pool", "Self Checkin"],
    reviews: [
      {
        user: "Uma",
        avatar: "/assets/avatar21.png",
        rating: 5,
        comment: "Spectacular views and very private."
      }
    ]
  }
];

export const BACKGROUND_IMAGE = "/assets/bg.png";
