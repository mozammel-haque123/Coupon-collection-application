import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// ওপেন করলে Transition Effact দেখাবে তার import
import AOS from "aos";
import "aos/dist/aos.css";

const MaulipolProdauct = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("MaulipolProdauct.json")
    .then((res) => res.json())
    .then((data) => setData(data));
  }, []);
  
  // ওপেন করলে Transition Effact দেখাবে তার useEffect
useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: true,     
    offset: 100     
  });
}, []);
// ওপেন করলে Transition Effact দেখাবে সেই Transition
  const aosAnimations = ["zoom-out", "flip-up", "fade-left", "slide-up", "flip-right", "zoom-in-up", "slide-left"];


  // hover transition ক্লাস
  const hoverEffects = [
    // ১. Simple fade
    "opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out",
    
    // ২. Scale up + fade
    "opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-transform transition-opacity duration-700 ease-out",
    
    // ৩. Rotate + fade
    "opacity-0 group-hover:opacity-100 group-hover:rotate-6 transition-transform transition-opacity duration-700 ease-in-out",
    
    // ৪. Slide from right + fade
    "opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-transform transition-opacity duration-700 ease-in-out",
    
    // ৫. Slide from bottom + fade
    "opacity-0 group-hover:opacity-100 group-hover:translate-y-3 transition-transform transition-opacity duration-700 ease-in-out",
  ];

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-6">Latest Blogs</h2>
      <div className="flex flex-col lg:flex-row gap-6 overflow-x-auto">
        {data.map((item, index) => {
          const effectClass = hoverEffects[index % hoverEffects.length];

          return (
            <div
              key={item.id}
             // Transition Effact টা এখানে বসাবে
              data-aos={aosAnimations[index % aosAnimations.length]}
              className="card w-80 bg-base-100 shadow-xl group overflow-hidden rounded-lg"
            >
              <figure className="relative w-full h-48 overflow-hidden rounded-t-lg">
                {/* Default Image */}
                <img
                  src={item.imageDefault}
                  alt={item.title}
                  className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  draggable={false}
                />

                {/* Hover Image with different effect */}
                <img
                  src={item.imageHover}
                  alt="Hover"
                  className={`absolute top-0 left-0 w-full h-full object-cover ${effectClass}`}
                  style={{ transformOrigin: "center center", willChange: "transform, opacity" }}
                  draggable={false}
                />
              </figure>
              <div className="card-body p-4">
                <p className="text-sm text-gray-400">
                  {item.date} – {item.category}
                </p>
                <h2 className="card-title text-base leading-snug">{item.title}</h2>
                <div className="mt-3">
                  <Link
                    to={'/brands'}
                    className="text-sm text-blue-600 font-medium hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MaulipolProdauct;
