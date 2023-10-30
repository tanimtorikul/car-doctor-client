import { Link, useNavigate } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { FaFacebook, FaSquareXTwitter, FaGoogle } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signIn(email, password)
      .then((res) => {
        const user = res.user;
        // console.log(user);
        toast.success("Logged in successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="min-h-[600px] flex items-center justify-center">
      <div className="flex flex-col-reverse lg:flex-row gap-10 md:gap-[70px] items-center">
        <div className="text-center w-4/5 md:w-[400px]">
          <img src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 md:w-[611px] border px-[75px] py-12 md:py-[75px]">
          <form className="" onSubmit={handleLogin}>
            <h1 className="text-2xl md:text-3xl text-center font-bold mb-[50px]">
              Login
            </h1>
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
                <span className="text-lg font-medium">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your password"
                name="password"
                className="input input-bordered mb-7"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6 mb-7">
              <input
                type="submit"
                value="Sign In"
                className="btn bg-[#FF3811] text-white"
              />
            </div>
            <p className="text-[#444] text-lg font-medium text-center">
              Or Sign In with
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
                <FaSquareXTwitter className="text-white"></FaSquareXTwitter>
              </a>
            </div>
            <p className="text-center text-lg font-semibold">
              New to Car Doctor?{" "}
              <Link to="/signup" className="text-[#FF3811]">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
