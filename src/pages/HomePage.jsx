import TopHeader from "../components/TopHeader"
import Header from "../components/Header"
import Hero from "../components/Hero"
import NewReleases from "../components/NewReleases"
import Categories from "../components/Categories"
import BestSeller from "../components/BestSeller"

const HomePage = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      <Hero />
      <NewReleases />
      <Categories />
      <BestSeller />
    </div>
  )
}

export default HomePage