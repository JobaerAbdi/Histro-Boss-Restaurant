import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import Button from "../../components/Button";

const MenuCategory = ({ items, btnName, name }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-8 py-8 ">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${name}`}><Button name={btnName}></Button></Link>
    </>
  );
};

export default MenuCategory;
