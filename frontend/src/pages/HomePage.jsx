import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Hero from "../components/Hero";
import NewReleases from "../components/NewReleases";
import Categories from "../components/Categories";
import BestSeller from "../components/BestSeller";
import Authors from "../components/Authors";
import Blogs from "../components/Blogs";
import Trust from "../components/Trust";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <Hero />
      <NewReleases />
      <Categories />
      <BestSeller />
      <Authors />
      <Blogs />
      <Trust />
      <Footer />
    </div>
  );
};

export default HomePage;
