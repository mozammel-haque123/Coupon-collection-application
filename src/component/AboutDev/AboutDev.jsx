import { Link } from "react-router-dom";
import cop from '../../assets/copon.jpg'
import sho from '../../assets/show.jpg'
import alls from '../../assets/all.jpg'
const AboutDev = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row gap-4">
               <div>
                {/* ওয়েব সাইট নিয়ে রচনা কার্ড - 1 */}
         <article
  className="max-w-3xl mx-auto p-8 my-16 bg-white rounded-xl shadow-lg
  bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50
  prose prose-blue prose-lg
  prose-headings:text-blue-700 prose-headings:font-bold
  prose-p:text-gray-800
  prose-ul:list-disc prose-ul:pl-6 prose-li:mb-2"
>
  <h1 className="text-4xl mb-8 text-center">The Value of Coupon Collection Applications</h1>

  <p>
    In today’s fast-paced online shopping world, saving money is essential. Coupon collection applications gather discount codes and deals from many brands in one place, making it easy for users to find savings quickly.
  </p>

  <p>
    These apps organize coupons by type, brand, or expiration date, helping shoppers access the best offers without visiting multiple sites or sifting through emails.
  </p>

  <h2>Key Features and Benefits</h2>

  <ul>
    <li>Verified, up-to-date coupon codes</li>
    <li>Easy navigation through organized categories</li>
    <li>Notifications for expiring deals</li>
    <li>User-friendly interfaces</li>
  </ul>

  <p>
    Such features enable smarter shopping and better savings for users.
  </p>

  <h2>Enhancing User Experience</h2>

  <p>
    A clear, intuitive design with responsive layouts ensures users enjoy a seamless experience, encouraging regular use.
  </p>

  <h2>Conclusion</h2>

  <p>
    Coupon collection applications are vital tools in e-commerce, helping consumers find and use deals efficiently to save money.
  </p>
</article>   
        </div>


<div>
  {/* Web Developer নিয়ে কার্ড - 2 */}
    <article
  className="max-w-3xl mx-auto p-8 my-16 bg-white rounded-xl shadow-lg
  bg-gradient-to-r from-green-50 via-teal-50 to-blue-50
  prose prose-teal prose-lg
  prose-headings:text-teal-700 prose-headings:font-bold
  prose-p:text-gray-800
  prose-ul:list-disc prose-ul:pl-6 prose-li:mb-2"
>
  <h1 className="text-4xl mb-8 text-center">The Biography of Web Developers</h1>

  <p>
    Web developers are the creative minds behind the websites and applications we use daily. They combine programming skills and design knowledge to build functional, engaging digital experiences.
  </p>

  <p>
    Many start with a passion for technology and learning languages like HTML, CSS, and JavaScript. Over time, they expand their expertise into frameworks, databases, and server management.
  </p>

  <h2>Key Skills and Growth</h2>

  <ul>
    <li>Proficiency in coding languages and tools</li>
    <li>Problem-solving and debugging abilities</li>
    <li>Continuous learning to keep up with evolving technologies</li>
    <li>Collaboration and communication within development teams</li>
  </ul>

  <p>
    Successful web developers adapt quickly and create solutions that meet both user needs and business goals.
  </p>

  <h2>The Impact of Web Developers</h2>

  <p>
    Web developers have transformed how we interact online, powering everything from simple websites to complex web applications that shape modern life.
  </p>

  <h2>Conclusion</h2>

  <p>
    The biography of a web developer is a journey of creativity, technical skill, and constant growth, making them vital contributors to the digital world.
  </p>
</article>

</div>       
   </div>


{/* all prodact compani logo */}
<div class=" w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
  {/* <!-- Product / Offer Image --> */}
  <img
    src={alls}
    alt="Product Image"
    class="w-full h-[400px] object-cover"
  />

  {/* <!-- Coupon Info Section --> */}
  <div class="p-5 space-y-3">
    <h2 class="text-xl font-bold text-gray-800">Flat 40% OFF on SuperShoes</h2>
    <p class="text-sm text-gray-600">
      Enjoy 40% instant discount on selected shoes from <span class="font-semibold text-indigo-600">SuperShoes</span>.
    </p>
    <p class="text-xs text-gray-500">
      Valid Till: <span class="font-medium">31 December 2025</span>
    </p>
    <p class="text-sm font-mono bg-gray-100 text-indigo-700 w-fit px-3 py-1 rounded">
      COUPON2025.....
    </p>

    {/* এই বাটন এ ক্লিক করলে Home এর কার্ড দেখাবে, Home page এ নিদৃষ্ট কার্ডে এটার id সেট করা আছে */}
    <Link
      to="/#section3"
      id="showCompanyLogoBtn"
      className="btn mt-2 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition-all duration-300"
    >
      Show Company Logo
    </Link>
  </div>
</div>





{/* card - 1 */}
<div className="flex flex-col md:flex-row my-16">
 <div class="w-full max-w-lg mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
  <div class="aspect-w-16 aspect-h-9">
    <img
      class="object-cover w-full h-full"
      src={cop}
      alt="Coupon Image"
    />
  </div>

  <div class="p-5 space-y-2">
    <h2 class="text-xl font-bold text-gray-800">All daily necessities</h2>
    <p class="text-sm text-gray-600">
      Use code <span class="font-semibold text-indigo-600">.......</span> to get flat 20% off on all electronics.
    </p>
    <p class="text-xs text-gray-500">
      Valid until: <span class="font-medium">30 July 2025</span>
    </p>
{/*এই বাটন এ ক্লিক করলে Home এর Latest Blogs কার্ড দেখাবে ,Home page এ নিদৃষ্ট কার্ডে এটার id সেট করা আছে*/}
    <Link
    to="/#section1"
      className="btn mt-3 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition-colors duration-300"
    >
      view product
    </Link>
  </div>
</div>
{/* card - 2 */}
 <div class="w-full max-w-lg mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
  <div class="aspect-w-16 aspect-h-9">
    <img
      class="object-cover w-full h-full"
      src={sho}
      alt="Coupon Image"
    />
  </div>

  <div class="p-5 space-y-2">
    <h2 class="text-xl font-bold text-gray-800">To see various fashion products</h2>
    <p class="text-sm text-gray-600">
      Use code <span class="font-semibold text-indigo-600">.......</span> to get flat 20% off on all electronics.
    </p>
    <p class="text-xs text-gray-500">
      Valid until: <span class="font-medium">30 July 2025</span>
    </p>
   {/*এই বাটন এ ক্লিক করলে Home এর Fashion show কার্ড দেখাবে, Home page এ নিদৃষ্ট কার্ডে এটার id সেট করা আছে */}
    <Link
    to="/#section2"
      className="btn mt-3 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition-colors duration-300"
    >
      view product
    </Link>
  </div>
</div>
</div>
        </div>
    );
};

export default AboutDev;