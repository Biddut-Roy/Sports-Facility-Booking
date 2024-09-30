import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="pt-10">
      <div className="flex flex-wrap">
        <div className="w-full sm:w-8/12 mb-10">
          <div className="container mx-auto h-full sm:p-10">
            <nav className="flex px-4 justify-between items-center">
              <div className="text-4xl font-bold">
                Sport<span className="text-green-700">.</span>
              </div>
              <div>
                <img
                  src="https://i.ibb.co/87mCBQS/sport.jpg"
                  alt=""
                  className="w-8"
                />
              </div>
            </nav>
            <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div className="w-full">
                <h1 className="text-4xl lg:text-6xl font-bold">
                  Find your <span className="text-green-700">sports</span>{" "}
                  grounds and facilities, along the foreshore.
                </h1>
                <div className="w-20 h-2 bg-green-700 my-4"></div>
                <p className="text-xl mb-10">
                  Our bookings portal will show you when venues are available
                  and get a price estimate. You can upload the information we
                  need to make your booking experience as smooth as possible.
                </p>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <NavLink to={"/facility"}>Facility</NavLink>
                </button>
              </div>
            </header>
          </div>
        </div>
        <img
          src="https://i.ibb.co/87mCBQS/sport.jpg"
          alt="Leafs"
          className="w-full h-48 object-cover sm:h-screen sm:w-4/12"
        />
      </div>
    </div>
  );
};

export default Hero;
