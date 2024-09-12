import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="sm:px-0 md:px-5 lg:px-20">
      <footer className="bg-[#252941] text-white py-10  ">
        <div className=" px-4 flex flex-wrap justify-between ">
          {/* Logo and Description */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">SportBooking</h2>
            <p>
              The world’s leading online sports booking & scheduling platform.
            </p>
            {/* <div className="flex space-x-4 mt-4">
              <NavLink to={"/"} aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </NavLink>
              <NavLink to={"/"} aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </NavLink>
              <NavLink to={"/"} aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </NavLink>
              <NavLink to={"/"} aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </NavLink>
            </div> */}
          </div>

          {/* Company Links */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul>
              <li className="mb-2">
                <NavLink to={"/"} className="hover:underline">
                  About us
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to={"/"} className="hover:underline">
                  Sports Facilities
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to={"/register"} className="hover:underline">
                  Register
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul>
              <li className="mb-2">
                <NavLink to={"/"} className="hover:underline">
                  Terms of Services
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to={"/"} className="hover:underline">
                  Privacy Policy
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to={"/"} className="hover:underline">
                  Documentation
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to={"/"} className="hover:underline">
                  Contact Us
                </NavLink>
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
          <NavLink to="#top" className="text-purple-500 hover:text-purple-700">
            <i className="fas fa-arrow-up"></i>
          </NavLink>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
