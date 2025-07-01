const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        {/* Logo & Description */}
        <div className="text-center md:text-left max-w-sm">
          <h1 className="text-3xl font-extrabold mb-3">CouponHub</h1>
          <p className="text-gray-200">
            Your ultimate destination for the best deals and exclusive coupons. Save more, shop smarter!
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col sm:flex-row gap-12 text-sm font-medium">
          <div>
            <h3 className="mb-3 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline hover:text-gray-300">Home</a></li>
              <li><a href="/coupons" className="hover:underline hover:text-gray-300">Coupons</a></li>
              <li><a href="/about" className="hover:underline hover:text-gray-300">About Us</a></li>
              <li><a href="/contact" className="hover:underline hover:text-gray-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li><a href="/faq" className="hover:underline hover:text-gray-300">FAQ</a></li>
              <li><a href="/privacy" className="hover:underline hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:underline hover:text-gray-300">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-right">
          <h3 className="mb-3 text-lg font-semibold">Follow Us</h3>
          <div className="flex justify-center md:justify-end space-x-5 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-gray-300 transition">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-gray-300 transition">
              <i className="fab fa-twitter-square"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gray-300 transition">
              <i className="fab fa-instagram-square"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gray-300 transition">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white border-opacity-20 mt-10 pt-6 text-center text-sm text-gray-200">
        &copy; {new Date().getFullYear()} CouponHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
