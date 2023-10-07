import Banner from "./Banner";
import Category from "./Category";
import PopularMenu from "./PopularMenu";
import Contact from "./Contact";
import MenuRecommends from "./MenuRecommends";
import Features from "./Features";
import Testimonials from "./Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Histro-Booss || Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Contact></Contact>
      <MenuRecommends></MenuRecommends>
      <Features></Features>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
