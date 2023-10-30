import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-6 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="px-6 py-10 items-start text-center">
        <h2 className="card-title text-2xl font-bold mb-5">{title}</h2>
        <div className="flex justify-between items-center">
          <p className="text-[#FF3811] text-xl font-semibold">Price: ${price}</p>
         <div>
          <Link to={`/book/${_id}`}>
          <button className="text-[#FF3811] text-lg font-medium flex gap-2 items-center">Book Now  <p className="text-[#FF3811]">
            <FaArrowRight />
          </p></button>
          </Link>
         </div>
        </div>
        <div className="card-actions"></div>
      </div>
    </div>
  );
};

export default ServiceCard;
