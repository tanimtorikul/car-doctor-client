import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="py-24">
      <div className="text-center space-y-5">
        <p className="text-[#FF3811] text-lg font-bold">Service</p>
        <h2 className="text-5xl font-bold">Our Service Area</h2>
        <p className="text-[#737373]">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br />
          words which dont look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid md:grid-cols-3 justify-center gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn btn-outline mt-[50px]  text-[#FF3811]">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
