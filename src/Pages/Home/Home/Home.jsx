import Hero from "../Hero/Hero";
import Services from "../HomeServices/HomeServices";
import OurWorks from "../OurWorks/OurWorks";
import WorkWithUsCard from "../WorkWithUsCard/WorkWithUsCard";
import WorkingProcess from "../WorkingProcess/WorkingProcess";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <WorkingProcess />
      <WorkWithUsCard />
      <OurWorks />
    </div>
  );
};

export default Home;
