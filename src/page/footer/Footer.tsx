const Footer = () => {
  return (
    <div className="px-20">
      <footer className="bg-[#252941] text-white py-10  ">
        <div className=" px-4 flex flex-wrap justify-between ">
          {/* Logo and Description */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">SportBook</h2>
            <p>
              The world’s leading online sports booking & scheduling platform.
            </p>
            {/* <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div> */}
          </div>

          {/* Company Links */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  About us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Features
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Sports Training
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Sports Facilities
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Register
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Terms of Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Documentation
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p>Sign up and receive the latest tips via email.</p>
            <form className="mt-4">
              <label className="block text-sm mb-2" htmlFor="email">
                Write your email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400"
                placeholder="Your email"
              />
              <button
                type="submit"
                className="mt-4 w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="text-center mt-10">
          <a href="#top" className="text-purple-500 hover:text-purple-700">
            <i className="fas fa-arrow-up"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
