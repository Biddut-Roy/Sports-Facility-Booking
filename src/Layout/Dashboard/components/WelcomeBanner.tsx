const WelcomeBanner = () => {
  return (
    <div className="relative bg-purple-500 rounded-lg p-6 flex items-center">
      {/* Left section */}
      <div className="text-white flex flex-col space-y-2">
        <span className="text-sm">September 4, 2023</span>
        <h1 className="text-3xl font-bold">Welcome back, John!</h1>
        <p className="text-sm">Always stay updated in your student portal</p>
      </div>

      {/* Right section with 3D illustration */}
      <div className="absolute right-0 flex items-center justify-end space-x-4">
        <img
          src="path/to/image.png"
          alt="Student"
          className="w-1/3 object-contain"
        />
      </div>
    </div>
  );
};

export default WelcomeBanner;
