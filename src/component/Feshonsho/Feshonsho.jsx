import { useEffect, useState } from "react";
// ওপেন করলে Transition Effact দেখাবে তার import
import AOS from "aos";
import "aos/dist/aos.css";

const Feshonsho = () => {
  const [data, setData] = useState([]);
// Home page এর Feshonsho ডাটা
  useEffect(() => {
    fetch("feshon.json")
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
    const aosAnimations = ["fade-up", "zoom-in", "flip-left", "fade-right", "fade-down"];

  // hover effact
  const transitionStyles = [
    "hover:scale-105 hover:rotate-1",
    "hover:scale-110 hover:-rotate-2",
    "hover:scale-105 hover:translate-y-2",
    "hover:scale-100 hover:translate-x-2 hover:shadow-2xl",
    "hover:scale-95 hover:-translate-y-2 hover:shadow-md",
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Fashion show</h1>
      <div className="flex flex-wrap justify-center gap-6 lg:flex-nowrap lg:justify-start">
        {data.map((item, idx) => (
          <div
            key={item.id}
                // Transition Effact টা এখানে বসাবে
               data-aos={aosAnimations[idx % aosAnimations.length]} // AOS animation on scroll
            className={`card w-72 bg-white shadow-md group transition-all duration-500 ease-in-out ${transitionStyles[idx % transitionStyles.length]}`}
          >
            <figure className="relative overflow-hidden rounded-t-xl">
              <img
                src={item.imageDefault}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:opacity-0 transition-opacity duration-500"
              />
              <img
                src={item.imageHover}
                alt={item.title}
                className="w-full h-64 object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute top-2 left-2">
                <span className="badge badge-secondary text-xs uppercase">
                  {item.badge}
                </span>
              </div>
            </figure>

            <div className="card-body p-4 space-y-2">
              <div className="flex justify-between text-xs text-gray-400">
                <span>{item.category}</span>
                <span>{item.sizes.join(" ")}</span>
              </div>

              <h2 className="card-title text-base">{item.title}</h2>

              <div className="flex gap-2 items-center">
                <span className="text-lg font-bold">${item.price}</span>
                <span className="line-through text-sm text-gray-400">
                  ${item.oldPrice}
                </span>
              </div>

              <div className="flex gap-2 mt-2">
                {item.colors.map((color, i) => (
                  <div
                    key={i}
                    className="w-5 h-5 rounded-full border"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feshonsho;
