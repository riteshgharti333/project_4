import Connect from "../../components/Connect/Connect";
import Design from "../../components/Design/Design";
import DesignCategories from "../../components/DesignCategories/DesignCategories";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import Leading from "../../components/Leading/Leading";
import OfferCard from "../../components/OfferCard/OfferCard";
import Projects from "../../components/Projects/Projects";
import Review from "../../components/Review/Review";
import Service from "../../components/Service/Service";
import Service2 from "../../components/Service2/Service2";
import Trend from "../../components/Trend/Trend";
import Work from "../../components/Work/Work";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <HomeBanner />
      <OfferCard />
      <Trend />
      <DesignCategories />
      <Design />
      <Service />
      <Connect />
      <Service2 />
      <Work />
      <Leading  />
      <Projects />
      <Review />

    </div>
  );
};

export default Homepage;
