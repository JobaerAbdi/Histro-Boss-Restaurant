const Menu = ({ menu }) => {
  // console.log(menu);
  const { image, name, recipe, price } = menu;
  return (
    <>
      <div className="flex space-x-5">
        <div>
          <img
            className="w-[150px]"
            style={{ borderRadius: "0 200px 200px 200px" }}
            src={image}
            alt=""
          />
        </div>
        <div>
          <p className="text-2xl">{name} ----------</p>
          <p>{recipe}</p>
        </div>
        <div>
          <p className="text-orange-600">${price}</p>
        </div>
      </div>
    </>
  );
};

export default Menu;
