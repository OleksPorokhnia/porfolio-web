import { useState } from "react";
import '../index.css'

function Card({ color, title, frontIcon, children}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div 
      className="w-full h-full perspective cursor-pointer rounded-2xl transition-transform duration-300 ease-out 
    hover:scale-105 hover:shadow-2xl"
      onClick={() => setFlipped(!flipped)}
    >
        <div
            className={`shadow-xl hover:shadow-2xl transition-shadow rounded-2xl relative w-full h-full preserve-3d transition-transform duration-500 ${flipped ? "rotate-y-180" : ""}`}
        >
            {/* Front */}
            <div className="absolute w-full h-full bg-gradient-to-b from-pink-200 via-purple-300 to-indigo-300 border-1 border-indigo-500/100 dark:bg-gray-800 shadow-lg rounded-2xl flex flex-col justify-center items-center">
            <div className="text-4xl">{frontIcon}</div>
            <h2 className="text-xl font-bold mt-4">{title}</h2>
            <p className="text-gray-500 mt-2">Click to flip</p>
            </div>

            {/* Back */}
            <div className={`absolute w-full h-full ${color} border-1 border-gray-800 text-white rounded-2xl p-4 backface-hidden rotate-y-180 overflow-auto`}>
            <div className="text-4xl">{frontIcon}</div>
            <h2 className="text-xl font-bold mt-4 mb-3 tracking-wide">{title}</h2>
                {children}
            </div>
        </div>
</div>
  );
}

export default Card;
