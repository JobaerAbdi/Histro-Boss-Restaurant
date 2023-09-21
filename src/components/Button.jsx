const Button = ({btnName}) => {
  return (
    <div className="w-full text-center">
      <button className="btn btn-outline border-0 border-b-4 btn-neutral mb-6">
        {btnName}
      </button>
    </div>
  );
};

export default Button;
