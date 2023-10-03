import OrderCard from "./OrderCard";

const OrderCategory = ({items}) => {
  return (
    <div className="grid md:grid-cols-3 gap-6 py-8">
      {items.map((item) => (
        <OrderCard key={item._id} item={item}></OrderCard>
      ))}
    </div>
  );
};

export default OrderCategory;
