import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// ওপেন করলে Transition Effact দেখাবে তার import
import AOS from "aos";
import "aos/dist/aos.css";

const Brands = () => {
    const [brands, setBrands] = useState([])
    // সকল ডাটা json
    useEffect(()=>{
     fetch('/data.json')
     .then(res => res.json())
     .then(data => setBrands(data))
    },[])

    // ওপেন করলে Transition Effact দেখাবে তার useEffect
   useEffect(() => {
  AOS.init({
    duration: 1000, 
    once: true,     
    offset: 100     
  });
}, []);

// ওপেন করলে Transition Effact দেখাবে সেই Transition
  const aosAnimations = [
  "fade-up",    
  "fade-right",  
  "fade-left",  
  "fade-down"   
];

    return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {brands.map((brand,index) => (
        <div
          key={brand._id}
          // Transition Effact টা এখানে বসাবে
              data-aos={aosAnimations[index % aosAnimations.length]}
          className="bg-white shadow-lg rounded-xl overflow-hidden border border-amber-200 hover:scale-[1.02] transition-all duration-300"
        >
          {/* Brand Logo */}
          <img
            src={brand.brand_logo}
            alt={brand.brand_name}
            className="w-full h-48 object-cover"
          />

          {/* Info */}
          <div className="p-4">
            <h2 className="text-xl font-bold mb-1 text-gray-800">{brand.brand_name}</h2>
            <p className="text-sm text-gray-600 mb-2">{brand.description}</p>

            {/* Rating */}
            <div className="text-yellow-500 font-semibold mb-2">
              ⭐ {brand.rating} / 5
            </div>
          
          <div>
            <p className="font-medium">{brand.coupons[0].discount}</p>
          </div>

         <div className="text-base font-medium text-gray-500">
            {
            brand.isSaleOn === true ? 'Sale is On' : 'Sale is close'
            }
         </div>

            {/* Coupons */}
            {/* <div className="mb-2">
              <h3 className="font-semibold text-sm text-gray-700">Coupons:</h3>
              <ul className="text-sm list-disc list-inside text-gray-600">
                {brand.coupons.map((coupon, idx) => (
                  <li key={idx}>
                    <span className="font-medium">{coupon.code}</span>: {coupon.discount}
                    {" "}
                    <span className="text-xs text-gray-400">(valid till {coupon.valid_till})</span>
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Shop Button */}
            <NavLink
            to={`/brandsDitails/${brand._id}`}
              className="inline-block mt-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded"
            >
             View Coupons
            </NavLink>
          </div>
        </div>
      ))}
    </div>
    );
};

export default Brands;

