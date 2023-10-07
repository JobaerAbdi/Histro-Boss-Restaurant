import Cover from "../Shared/Cover";
import orderCover from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import OrderCard from "../Shared/OrderCard";
import OrderCategory from "../Shared/OrderCategory";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["offered", "salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);

  // const result = useParams();
  // const final = result.category
  // const initialIndex = categories.indexOf(final);

  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [menus] = useMenu();
  const offeredItems = menus.filter((item) => item.category === "offered");
  const saladItems = menus.filter((item) => item.category === "salad");
  const pizzaItems = menus.filter((item) => item.category === "pizza");
  const soupItems = menus.filter((item) => item.category === "soup");
  const dessertItems = menus.filter((item) => item.category === "dessert");
  const drinksItems = menus.filter((item) => item.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro boss || Order</title>
      </Helmet>
      <Cover img={orderCover} name={"Order Food"}></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="bg-red-600 text-center font-bold">
          <Tab>Offered Item</Tab>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderCategory items={offeredItems}></OrderCategory>
        </TabPanel>
        <TabPanel>
          <OrderCategory items={saladItems}></OrderCategory>
        </TabPanel>
        <TabPanel>
          <OrderCategory items={pizzaItems}></OrderCategory>
        </TabPanel>
        <TabPanel>
          <OrderCategory items={soupItems}></OrderCategory>
        </TabPanel>
        <TabPanel>
          <OrderCategory items={dessertItems}></OrderCategory>
        </TabPanel>
        <TabPanel>
          <OrderCategory items={drinksItems}></OrderCategory>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
