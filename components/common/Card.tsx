
import React from 'react';

export default function Card() {
  return (
    <div>
        <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Card Title</h2>
            <p className="text-gray-700 mb-4">This is a simple card component using Tailwind CSS.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Click Me
            </button>
        </div>
    </div>
  );
}
