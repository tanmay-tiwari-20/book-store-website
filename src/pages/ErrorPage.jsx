import Footer from "../components/Footer";
import Header from "../components/Header";
import TopHeader from "../components/TopHeader";

const ErrorPage = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <div className="h-screen py-10">
        {/* Breadcrumb Section */}
        <div className="mb-8 px-4 sm:px-8 lg:px-28">
          <p className="text-sm sm:text-base">
            <span className="opacity-50">Home</span> / 404 Error
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
