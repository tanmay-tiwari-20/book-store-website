import { Link } from "react-router-dom";
import {
  FaProductHunt,
  FaMoneyBillWave,
  FaUserCircle,
  FaClipboardList,
} from "react-icons/fa";
import { Bar, Line } from "react-chartjs-2"; // Importing chart components
import { Chart as ChartJS, registerables } from "chart.js"; // ChartJS registration
ChartJS.register(...registerables);

const AdminDashboard = () => {
  const sidebarLinks = [
    { to: "/admin/products", icon: <FaProductHunt />, label: "Products" },
    { to: "/admin/orders", icon: <FaClipboardList />, label: "Orders" },
    { to: "/admin/customers", icon: <FaUserCircle />, label: "Customers" },
    { to: "/admin/payments", icon: <FaMoneyBillWave />, label: "Payments" },
  ];

  const dashboardCards = [
    {
      title: "Manage Products",
      description: "Add, update, or remove products from the store.",
      to: "/admin/products",
      color: "bg-[#47B486]",
    },
    {
      title: "Manage Orders",
      description: "View, update, or manage orders placed by customers.",
      to: "/admin/orders",
      color: "bg-[#E2B93B]",
    },
    {
      title: "Manage Customers",
      description: "View and manage customer information and profiles.",
      to: "/admin/customers",
      color: "bg-[#D37643]",
    },
    {
      title: "Manage Payments",
      description: "View and track payments for orders.",
      to: "/admin/payments",
      color: "bg-[#DB4444]",
    },
  ];

  const statsCards = [
    { title: "Total Products", value: 235, color: "bg-[#E2B93B]" },
    { title: "Total Orders", value: 1435, color: "bg-[#47B486]" },
    { title: "Total Revenue", value: "$12,345", color: "bg-[#DB4444]" },
  ];

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Orders",
        data: [300, 500, 800, 600, 700, 1000],
        backgroundColor: "#47B486",
      },
    ],
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [1000, 1500, 2000, 2500, 3000, 3500],
        borderColor: "#DB4444",
        backgroundColor: "rgba(219, 68, 68, 0.2)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="min-h-screen flex bg-[#F7F9FC]">
      {/* Sidebar */}
      <div className="w-64 bg-[#2D3748] p-6">
        <h1 className="text-2xl font-bold mb-8 text-white">Admin Dashboard</h1>
        <nav>
          <ul>
            {sidebarLinks.map(({ to, icon, label }) => (
              <li key={to} className="mb-4">
                <Link
                  to={to}
                  className="flex items-center text-white p-3 hover:bg-[#1A202C] rounded transition-all"
                >
                  {icon}
                  <span className="ml-3">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h2 className="text-3xl font-semibold mb-6 text-[#2D3748]">
          Welcome to the Admin Dashboard
        </h2>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {dashboardCards.map(({ title, description, to, color }) => (
            <div
              key={title}
              className={`${color} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
            >
              <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
              <p className="text-white mb-4">{description}</p>
              <Link to={to} className="underline text-white">
                Go to {title.split(" ")[1]}
              </Link>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {statsCards.map(({ title, value, color }) => (
            <div
              key={title}
              className={`${color} p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {title}
              </h3>
              <p className="text-white text-3xl font-bold">{value}</p>
            </div>
          ))}
        </div>

        {/* Graph Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Order Trends</h3>
            <Bar data={barData} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Revenue Trends</h3>
            <Line data={lineData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
