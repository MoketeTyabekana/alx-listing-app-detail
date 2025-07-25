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

