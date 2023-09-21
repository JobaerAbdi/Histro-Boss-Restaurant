import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";

const MenuRecommends = () => {
  const [menus, setMenu] = useState([]);
  console.log(menus);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const offeredMenu = data.filter((item) => item.category === "offered");
        setMenu(offeredMenu);
      });
  }, []);

  return (
    <>
      <SectionTitle subHeading={'Should try'} heading={'Chef Recommends'}></SectionTitle>
      <div className="grid md:grid-cols-3 gap-7 my-12">
        {menus.map((menu) => (
          <div key={menu._id}>
            <div className="card w-full h-full bg-slate-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={menu.image} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{menu.name}</h2>
                <h2>{menu.recipe}!</h2>
                <div className="mt-5">
                  <button className="btn btn-outline border-0 border-b-4 border-red-600">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuRecommends;
