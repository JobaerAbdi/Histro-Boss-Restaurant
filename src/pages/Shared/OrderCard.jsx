import Button from "../../components/Button";

const OrderCard = ({ item }) => {
  const { image, name, recipe, price } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <img src={image} alt="Shoes" className="rounded-xl" />
      <p className="bg-slate-800 text-white absolute p-2 right-0 mt-5 mr-5">{price}</p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <Button name={"Add to cart"}></Button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
