import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const BrandsDitails = () => {
  // সকল ডাটার বিস্তারিত তথ্য যা ক্লিক কররে id অনুযায়ী ডাটা আসবে
  const brand = useLoaderData();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="card w-full max-w-md bg-white shadow-xl rounded-lg">
        <figure className="px-6 pt-6">
          <img src={brand.brand_logo} alt={brand.brand_name} className="rounded-xl w-36 h-36 object-contain" />
        </figure>

        <div className="card-body items-center text-center space-y-2">
          <h2 className="card-title text-2xl font-bold">{brand.brand_name}</h2>

          <p className="text-gray-600">{brand.description}</p>

          <div className="flex items-center gap-2 text-yellow-500">
            <FaStar />
            <span className="text-gray-800">{brand.rating} / 5</span>
          </div>

          <div>
            <h3 className="font-semibold text-lg mt-4">Coupon:</h3>
            <div className="bg-gray-200 px-3 py-2 rounded-lg mt-1">
              <p className="font-semibold text-indigo-600">{brand.coupons[0].code}</p>
              <p>{brand.coupons[0].discount}</p>
              <p className="text-sm text-gray-500">Valid till: {brand.coupons[0].valid_till}</p>
            </div>
          </div>

          <a
            href={brand.shop_Link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-4"
          >
            Visit Shop
          </a>

          <div className="mt-2 text-sm text-gray-500">
            Category: <span className="text-gray-700 font-medium">{brand.category}</span>
          </div>

          {
            brand.isSaleOn && (
              <div className="badge badge-success mt-2">Sale On!</div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default BrandsDitails;

<a href="#_" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
     <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
         <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
     </span>
     <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Button Text</span>
     <span class="relative invisible">Button Text</span>
 </a>