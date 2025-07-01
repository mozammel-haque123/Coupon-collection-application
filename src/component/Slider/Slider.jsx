import { useEffect, useState } from "react";
import prothom from '../../assets/prothom.jpg';
import ditiyo from '../../assets/ditiyo.jpg';
import tritiyo from '../../assets/tritiyo.jpg';
import coturtho from '../../assets/cturtho.jpg';
import holud from '../../assets/holud.png'
import { Link } from "react-router-dom";



const slides = [
  {
    id: 1,
    title: "Fashion sale for Men’s",
    subtitle: "Wear the change. Fashion that feels good.",
    img: prothom,
    discount: "35% Off",
  },
  {
    id: 2,
    title: "Trendy Women’s Wear",
    subtitle: "Unleash your fashion power.",
    img: ditiyo,
    discount: "40% Off",
  },
  {
    id: 3,
    title: "Kids Collection",
    subtitle: "Cute & Colorful Designs for Children.",
    img: tritiyo,
    discount: "25% Off",
  },
  {
    id: 4,
    title: "Winter Special",
    subtitle: "Stay warm and stylish.",
    img: coturtho,
    discount: "50% Off",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds delay
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-gray-900 text-white rounded-b-xl">
      {/* Slide Container */}
      <div
        className="flex transition-transform duration-[2000ms] ease-in-out"
        style={{
          transform: `translateX(-${current * 100}vw)`,
          width: `${slides.length * 100}vw`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-screen flex-shrink-0 flex flex-col md:flex-row items-center justify-between px-6 py-10"
          >
            {/* Text */}
            <div className="md:w-1/2 text-center md:text-left space-y-3 ml-10" >
              <div className="badge  text-amber-200 border-none font-medium w-22 h-20 tilt-animation text-[12px]"   style={{
    backgroundImage: `url(${holud})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'transparent'
  }}>
                {slide.discount}
              </div>
              <h2 className="text-3xl md:text-5xl font-bold">{slide.title}</h2>
              <p className="text-sm">{slide.subtitle}</p>
              <Link to={'/brands'} className="btn btn-primary mt-2">Shop Now</Link>
            </div>
            {/* Image */}
            <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-[250px] h-58 md:w-[350px] md:h-85 rounded-full border-4 border-yellow-400 shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === current ? "bg-blue-500" : "bg-white/30"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
