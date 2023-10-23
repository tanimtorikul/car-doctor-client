import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";
const About = () => {
  return (
    <div className="hero min-h-[550px] my-24">
      <div className="hero-content flex-col items-start gap-48 md:gap-12 lg:flex-row">
        <div className="lg:w-1/2  relative">
          <img
            src={person}
            className="w-3/4 h-96 object-cover rounded-lg shadow-2xl"
          />
          <img
            src={parts}
            className="w-1/2 md:w-[327px] absolute right-5 top-1/2 h-[332px] object-cover border-8 border-white rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-lg text-[#FF3811] font-bold mb-5">About us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified <br /> & of experience in this field
          </h1>
          <p className="py-7">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
            <p className="py-7">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
          </p>
          <button className="btn rounded text-white bg-[#FF3811]">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
