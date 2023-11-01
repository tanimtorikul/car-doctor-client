import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";

const BookService = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  const user = useContext(AuthContext);
  console.log(user?.user?.email);

  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.user?.email;
    const message = form.message.value;
    const booking = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      service_id: _id,
      price: price,
      message,
    };
    console.log(booking);

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Successfully added!");
          form.reset();
        }
      });
  };
  return (
    <div>
      <div className="text-center my-6">
        <h2 className="text-xl font-bold">Services of {title}</h2>
      </div>
      <div className="card w-full max-w-7xl mx-auto bg-[#F3F3F3]">
        <form onSubmit={handleBookService} className="card-body">
          <div className="form-control">
            <div className="flex justify-between space-x-4 py-6">
              <div className="w-full">
                <label>Name:</label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  placeholder="Name"
                  name="name"
                  className="input w-full input-bordered"
                  required
                />
              </div>
              <div className="w-full">
                <label>Date:</label>
                <input
                  type="date"
                  placeholder="Date"
                  name="date"
                  className="input w-full input-bordered"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-control">
            <div className="flex justify-between space-x-4 py-6">
              <div className="w-full">
                <label>Email:</label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  defaultValue={user?.user?.email}
                  className="w-full input input-bordered"
                  required
                />
              </div>
              <div className="w-full">
                <label>Price:</label>
                <input
                  type="text"
                  placeholder="Price"
                  name="price"
                  defaultValue={"$ " + price}
                  className="w-full input input-bordered"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-control py-6">
            <label>Your Message:</label>
            <textarea
              placeholder="Your Message"
              name="message"
              className="textarea textarea-bordered"
              required
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#FF3811] text-white">
              Confirm Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookService;
