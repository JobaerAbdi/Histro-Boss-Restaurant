import SectionTitle from "../../components/SectionTitle";
import featuresButton from "../../assets/home/featured.jpg";
import './Features.css';

const Features = () => {
  return (
    <div className="featuresStyle py-24 bg-fixed my-20">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"From our menu"}
      ></SectionTitle>
      <div className="flex justify-center items-center mx-32 my-12 bg-slate-400 bg-opacity-20 p-10">
        <img className="w-1/2" src={featuresButton} alt="" />
        <div className="ml-10 text-white">
          <h3 className="text-1xl">September 20, 2023</h3>
          <h3 className="text-1xl uppercase">Where can i get some?</h3>
          <p className="my-4">
            In a Tailwind CSS project, you need to write utility class names for
            every element. Thousands of class names just to style the most basic
            elements.
          </p>
          <button className="btn btn-outline border-0 border-b-4 text-white border-red-600">
           READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
