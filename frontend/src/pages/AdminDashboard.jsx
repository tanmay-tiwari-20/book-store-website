import { Link } from "react-router-dom"; // For navigation between different dashboard sections
import {
  FaProductHunt,
  FaMoneyBillWave,
  FaUserCircle,
  FaClipboardList,
} from "react-icons/fa"; // Importing icons for navigation

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-white text-white flex">
      {/* Sidebar with new color */}
      <div className="w-64 bg-[#EB5757] p-6">
        <h1 className="text-2xl font-bold mb-8 text-white bg-[#EB5757]">
          Admin Dashboard
        </h1>
        <nav>
          <ul>
            <li className="bg-[#EB5757]">
              <Link
                to="/admin/products"
                className="flex items-center text-white p-3 hover:bg-[#DB4444] rounded transition-all bg-[#EB5757]"
              >
                <FaProductHunt className="mr-3 bg-[#EB5757]" /> Products
              </Link>
            </li>
            <li className="bg-[#EB5757]">
              <Link
                to="/admin/orders"
                className="flex items-center text-white p-3 hover:bg-[#DB4444] rounded transition-all bg-[#EB5757]"
              >
                <FaClipboardList className="mr-3 bg-[#EB5757]" /> Orders
              </Link>
            </li>
            <li className="bg-[#EB5757]">
              <Link
                to="/admin/customers"
                className="flex items-center text-white p-3 hover:bg-[#DB4444] rounded transition-all bg-[#EB5757]"
              >
                <FaUserCircle className="mr-3 bg-[#EB5757]" /> Customers
              </Link>
            </li>
            <li className="bg-[#EB5757]">
              <Link
                to="/admin/payments"
                className="flex items-center text-white p-3 hover:bg-[#DB4444] rounded transition-all bg-[#EB5757]"
              >
                <FaMoneyBillWave className="mr-3 bg-[#EB5757]" /> Payments
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 bg-white">
        <h2 className="text-3xl font-semibold mb-4 text-[#363738]">
          Welcome to the Admin Dashboard
        </h2>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card for Products */}
          <div className="bg-[#47B486] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-white bg-[#47B486]">
              Manage Products
            </h3>
            <p className="text-white mb-4 bg-[#47B486]">
              Add, update, or remove products from the store.
            </p>
            <Link
              to="/admin/products"
              className="mt-4 inline-block transition-colors bg-[#47B486]"
            >
              Go to Products
            </Link>
          </div>

          {/* Card for Orders */}
          <div className="bg-[#E2B93B] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-[#363738] bg-[#E2B93B]">
              Manage Orders
            </h3>
            <p className="text-[#363738] mb-4 bg-[#E2B93B]">
              View, update, or manage orders placed by customers.
            </p>
            <Link
              to="/admin/orders"
              className="bg-[#E2B93B] mt-4 inline-block transition-colors"
            >
              Go to Orders
            </Link>
          </div>

          {/* Card for Customers */}
          <div className="bg-[#D37643] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-white bg-[#D37643]">
              Manage Customers
            </h3>
            <p className="text-white mb-4 bg-[#D37643]">
              View and manage customer information and profiles.
            </p>
            <Link
              to="/admin/customers"
              className="bg-[#D37643] mt-4 inline-block transition-colors"
            >
              Go to Customers
            </Link>
          </div>

          {/* Card for Payments */}
          <div className="bg-[#DB4444] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-white bg-[#DB4444]">
              Manage Payments
            </h3>
            <p className="text-white mb-4 bg-[#DB4444]">
              View and track payments for orders.
            </p>
            <Link
              to="/admin/payments"
              className="bg-[#DB4444] mt-4 inline-block transition-colors"
            >
              Go to Payments
            </Link>
          </div>
        </div>

        {/* Summary Stats Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Stats Card 1 */}
          <div className="bg-[#E2B93B] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-[#363738] mb-4 bg-[#E2B93B]">
              Total Products
            </h3>
            <p className="text-[#363738] text-3xl font-bold bg-[#E2B93B]">235</p>
          </div>

          {/* Stats Card 2 */}
          <div className="bg-[#47B486] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-[#363738] mb-4 bg-[#47B486]">
              Total Orders
            </h3>
            <p className="text-[#363738] text-3xl font-bold bg-[#47B486]">1,435</p>
          </div>

          {/* Stats Card 3 */}
          <div className="bg-[#DB4444] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-[#363738] mb-4 bg-[#DB4444]">
              Total Revenue
            </h3>
            <p className="text-[#363738] text-3xl font-bold bg-[#DB4444]">$12,345</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
