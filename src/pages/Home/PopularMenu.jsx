import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useEffect } from "react";
import MenuItem from "../Shared/MenuItem";
import Lutton from "../../components/Button";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "../Shared/MenuCategory";

const PopularMenu = () => {
  const [menus] = useMenu();
  const popularMenu = menus.filter(item=> item.category === 'popular')
  return (
    <>
      <SectionTitle
        subHeading={"Check it out"}
        heading={"From our menu"}
      ></SectionTitle>
      {/* <div className="grid md:grid-cols-2 gap-8 py-8">
        {popularMenu.map((menu) => (
          <MenuItem key={menu._id} menu={menu}></MenuItem>
        ))}
      </div> */}
      <MenuCategory items={popularMenu} btnName={'VIEW FULL MENU'} ></MenuCategory>
    </>
  );
};

export default PopularMenu;
