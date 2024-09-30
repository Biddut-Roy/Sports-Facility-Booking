import { NavLink, useParams } from "react-router-dom";
import { useGetFacilityQuery } from "../../Redux/api/baseApi";
import TItem from "./item";
import { toast, Toaster } from "sonner";

const FacilityCard = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetFacilityQuery(undefined);
  console.log(id);

  if (isLoading) {
    toast("Please wait a second before");
    return (
      <div>
        <Toaster position="top-center" />
        Wait a Second
      </div>
    );
  }
  if (error) {
    toast("Please Reload");
    return (
      <div>
        <Toaster position="top-center" />
        Reload Again
      </div>
    );
  }

  const facility = data?.data?.find((facility: TItem) => facility._id === id);

  if (!facility) return <div>Facility not found</div>;

  return (
    <div
      style={{ backgroundImage: `url(${facility.image_url})` }}
      className="flex justify-center items-center h-screen bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 bg-cover bg-center bg-no-repeat"
    >
      <div className="flex justify-between gap-10 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={facility.image_url}
          alt="img"
        />
        <div className="flex flex-col justify-around p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {facility?.name}
          </h5>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {facility?.location}
          </h5>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Price per Hour: {facility?.pricePerHour}$
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {facility?.description}
          </p>
          <div>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <NavLink to={`"/booking/${id}"`}>Book Now</NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;
