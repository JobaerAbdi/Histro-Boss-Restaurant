import Cover from "../Shared/Cover";
import SectionTitle from "../../components/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "../Shared/MenuCategory";

import menuCover from '../../assets/menu/banner3.jpg'
import dessertCover from '../../assets/menu/dessert-bg.jpeg'
import pizzaCover from '../../assets/menu/pizza-bg.jpg'
import saladCover from '../../assets/menu/salad-bg.jpg'
import soupCover from '../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menus] = useMenu();
    const offerMenus = menus.filter(item=> item.category === 'offered')
    const dessertMenus = menus.filter(item=> item.category === 'dessert')
    const pizzaMenus = menus.filter(item=> item.category === 'pizza')
    const saladMenus = menus.filter(item=> item.category === 'salad')
    const soupMenus = menus.filter(item=> item.category === 'soup')
    const drinksMenus = menus.filter(item=> item.category === 'drinks')

    return (
        <div>
            {/* Main section */}
            <Cover img={menuCover} name={'Our menu'} ></Cover>
            <SectionTitle subHeading={"Don't miss"} heading={"Today's offer"}></SectionTitle>
            <MenuCategory items={offerMenus} btnName={"Today's offer"} name={'offered'}></MenuCategory>

            {/* Salad section */}
            <Cover img={saladCover} name={'salad'} ></Cover>
            <MenuCategory items={saladMenus} btnName={'Order Salad'} name={'salad'}></MenuCategory>
            
            {/* Pizza section */}
            <Cover img={pizzaCover} name={'pizza'} ></Cover>
            <MenuCategory items={pizzaMenus} btnName={'Order Pizza'} name={'pizza'}></MenuCategory>

            {/* Soup section */}
            <Cover img={soupCover} name={'soup'} ></Cover>
            <MenuCategory items={soupMenus} btnName={'Order Soup'}  name={'soup'}></MenuCategory>

            {/* Dessert section */}
            <Cover img={dessertCover} name={'dessert'} ></Cover>
            <MenuCategory items={dessertMenus} btnName={'Order Dessert'} name={'dessert'}></MenuCategory>
            
            {/* Drinks section */}
            <Cover img={dessertCover} name={'soup'} ></Cover>
            <MenuCategory items={drinksMenus} btnName={'Order Drinks'}  name={'drinks'}></MenuCategory>
        </div>
    );
};

export default Menu;