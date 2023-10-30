import { Link } from "react-router-dom";
import signupImage from "../../assets/images/login/login.svg";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
  .then((result) => {
    if (result && result.user) {
      const user = result.user;
      console.log(user);
    } else {
      console.log("User not found in the result object");
    }
  })
  .catch((error) => {
    console.log(error);
  });

  };

  return (
    <div className="min-h-[600px] flex items-center justify-center">
      <div className="flex flex-col-reverse lg:flex-row gap-10 md:gap-[70px] items-center">
        <div className="text-center w-4/5 md:w-[400px]">
          <img src={signupImage} alt="" />
        </div>
        <div className="card flex-shrink-0 md:w-[611px] border px-[75px] py-12 md:py-[75px]">
          <form className="" onSubmit={handleSignup}>
            <h1 className="text-2xl md:text-3xl text-center font-bold mb-[50px]">
              Sign Up
            </h1>
            <div className="form-control">
              <label className="label mb-[20px]">
                <span className="text-lg font-medium">Name</span>
              </label>
              <input
                type="name"
                placeholder="Your name"
                name="name"
                className="input input-bordered mb-7"
                required
              />
            </div>
            <div className="form-control">
              <label className="label mb-[20px]">
                <span className="text-lg font-medium">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                name="email"
                className="input input-bordered mb-7"
                required
              />
            </div>
            <div className="form-control">
              <label className="label mb-[20px]">
                <span className="text-lg font-medium">Your Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered mb-7"
                required
              />
            </div>
            <div className="form-control mt-6 mb-7">
              <input
                type="submit"
                value="Sign Up"
                className="btn bg-[#FF3811] text-white"
              />
            </div>
            <p className="text-[#444] text-lg font-medium text-center">
              Or Sign Up with
            </p>
            <div className="flex justify-center gap-4 mt-7 mb-12">
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600"
              >
                <FaFacebook className="text-white"></FaFacebook>
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 hover:bg-red-600"
              >
                <FaGoogle className="text-white"></FaGoogle>
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-300 hover:bg-blue-400"
              >
                <FaTwitter className="text-white"></FaTwitter>
              </a>
            </div>
            <p className="text-center text-lg font-semibold">
              Already have an account?{" "}
              <Link to="/login" className="text-[#FF3811]">
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
