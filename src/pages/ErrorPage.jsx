import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TopHeader from "../components/TopHeader";

const ErrorPage = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <div className="min-h-screen flex flex-col py-10">
        {/* Breadcrumb Section */}
        <div className="mb-8 px-4 sm:px-8 lg:px-28">
          <p className="text-sm sm:text-base">
            <span className="opacity-50">Home</span> / 404 Error
          </p>
        </div>
        {/* Main Content Section */}
        <div className="flex-grow flex flex-col justify-center items-center px-4 gap-6 sm:gap-8 lg:gap-10">
          <h1 className="font-inter tracking-wider text-4xl sm:text-6xl lg:text-8xl font-bold text-center">
            404 Not Found
          </h1>
          <p className="text-center text-sm sm:text-base lg:text-lg">
            The page you are looking for does not exist. You may go back to the home page.
          </p>
          <Link to="/">
            <button className="px-6 py-3 text-sm sm:text-base bg-red-500 hover:bg-red-600 rounded text-white">
              Back to home page
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
