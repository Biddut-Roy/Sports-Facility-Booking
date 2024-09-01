const BookingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-xl font-bold text-center mb-4">Booking Page</h1>

        <div className="border border-dashed p-4 mb-4">
          <p className="font-semibold">Facility Name</p>
          <p className="text-sm text-gray-600">Facility Details</p>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="bg-black text-white text-center py-2 px-4 rounded-md">
            23/09/2025
          </div>
          <button className="bg-gray-400 text-white py-2 px-4 rounded-md">
            Check Button
          </button>
        </div>

        <div className="flex justify-between mb-4">
          <div className="bg-black text-white text-center py-2 px-4 rounded-md flex-1 mr-2">
            02.00 - 13.00
          </div>
          <div className="bg-black text-white text-center py-2 px-4 rounded-md flex-1 ml-2">
            15.00 - 23.59
          </div>
        </div>

        <div className="flex justify-between mb-4">
          <div className="bg-black text-white text-center py-2 px-4 rounded-md flex-1 mr-2">
            Start Time <br /> 16.00
          </div>
          <div className="bg-black text-white text-center py-2 px-4 rounded-md flex-1 ml-2">
            End Time <br /> 20.30
          </div>
        </div>

        <button className="bg-gray-400 text-white w-full py-2 rounded-md">
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default BookingPage;
