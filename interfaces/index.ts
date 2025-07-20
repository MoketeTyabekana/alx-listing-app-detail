export interface CardProps {
  title: string
  price_perNight: string
    city: string
    image: string
    bedrooms: number
    bathrooms: number
    number_of_guests: number
    rating: number
    features: string[]
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger";
  className?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}