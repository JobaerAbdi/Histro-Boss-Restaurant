const Button = ({name}) => {
  return (
    <div className="w-full text-center">
      <button className="btn btn-outline border-0 border-b-4 bg-slate-200 border-orange-600 mb-16">
        {name}
      </button>
    </div>
  );
};

export default Button;
