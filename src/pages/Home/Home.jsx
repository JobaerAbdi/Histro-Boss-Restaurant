import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Category from "./Category";
import PopularMenu from "./PopularMenu";
import Contact from "./Contact";
import MenuRecommends from "./MenuRecommends";
import Features from "./Features";

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
    </div>
  );
};

export default Home;
