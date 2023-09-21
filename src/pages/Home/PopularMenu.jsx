import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useEffect } from "react";
import Menu from "../Shared/Menu";
import Button from "../../components/Button";

const PopularMenu = () => {
  const [menus, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularMenu = data.filter((item) => item.category === "popular");
        setMenu(popularMenu);
      });
  }, []);

  return (
    <>
      <SectionTitle
        subHeading={"Check it out"}
        heading={"From our menu"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-8 py-8">
        {menus.map((menu) => (
          <Menu key={menu._id} menu={menu}></Menu>
        ))}
      </div>
      <Button btnName={'VIEW FULL MENU'}></Button>
    </>
  );
};

export default PopularMenu;
