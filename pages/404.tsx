import Link from 'next/link';
import { FaHome } from 'react-icons/fa'; 
import Button from '@/components/common/Button';
import { useRouter } from 'next/router';
import { BUTTON_TEXT } from '@/constants';

const Custom404 = () => {

    const router = useRouter();
    
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center text-white">
      {/* Main Heading */}
      <h1 className="text-6xl font-bold mb-4">Oops! 😱</h1>
      <p className="text-2xl mb-8">
        We can't seem to find the page you're looking for.
      </p>

      {/* Funny Message */}
      <p className="text-lg mb-8 text-center max-w-md">
        Maybe it was abducted by aliens 👽, or it just took a wrong turn into the Internet wilderness! Either way, it's not here.
      </p>

      {/* Button to navigate back */}
          <Button
      label={BUTTON_TEXT.goBackHome}
      variant="danger"
      onClick={() => router.push('/')}
    />
    </div>
  );
}

export default Custom404;