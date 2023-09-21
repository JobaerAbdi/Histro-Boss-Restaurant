
const SectionTitle = ({ subHeading, heading }) => {
  return (
    <>
      {/* <div className="flex flex-col items-center w-3/12 mx-auto"> */}
      <div className="text-center mx-auto w-3/12">
        <p className="mb-2 text-red-600">---- {subHeading} ----</p>
        <p className="uppercase font-semi-bold text-2xl py-2 border-y-2 border-amber-400">
          {heading}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
