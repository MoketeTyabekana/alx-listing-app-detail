export interface CardProps {
  title: string;
  price_perNight: number;
  city: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  number_of_guests: string; // change to string if you want to allow "2-3"
  rating: number;
  features: string[];
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger"|"tertiary"; // ✅ Tell TS it's a key of variantStyle
  className?: string;
  disabled?: boolean;
  icon?:string;
}

export interface Address {
  state: string;
  city: string;
  country: string;
}

 export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}



export interface PropertyProps {
  id: number | string;
  name: string;
  price: number;
  rating: number;
  address: {
    state?: string;
    city: string;
    country: string;
  };
   images?: {
    main: string;
    others: string[];
  };
  description: string;
  category: string[];
  reviews?: {
    user: string;
    avatar?: string;
    comment: string;
    rating: number;
  }[];
  bedrooms: number;
  bathrooms: number;
  number_of_guests: string;
  features: string[];
  discount?: string;
  offers?: Offers;
  image?: string; 
}



