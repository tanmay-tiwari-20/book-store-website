import { useState } from "react";

const OrderManagement = () => {
  const [orders, setOrders] = useState([
    {
      _id: 1,
      customerName: "John Doe",
      customerEmail: "john@example.com",
      orderDate: "2024-12-19",
      status: "Pending",
      totalAmount: 150.0,
      items: [
        { product: "Product A", quantity: 2, price: 50 },
        { product: "Product B", quantity: 1, price: 50 },
      ],
    },
    {
      _id: 2,
      customerName: "Jane Smith",
      customerEmail: "jane@example.com",
      orderDate: "2024-12-20",
      status: "Shipped",
      totalAmount: 200.0,
      items: [
        { product: "Product C", quantity: 2, price: 100 },
      ],
    },
  ]);

  const [editingOrderId, setEditingOrderId] = useState(null);
  const [orderStatus, setOrderStatus] = useState("");

  const handleUpdateOrderStatus = (id) => {
    setOrders(
      orders.map((order) =>
        order._id === id ? { ...order, status: orderStatus } : order
      )
    );
    setEditingOrderId(null);
    setOrderStatus("");
  };

  const handleEditOrder = (order) => {
    setEditingOrderId(order._id);
    setOrderStatus(order.status);
  };

  const handleDeleteOrder = (id) => {
    setOrders(orders.filter((order) => order._id !== id));
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-6">Order Management</h1>

      {editingOrderId && (
        <div className="mb-6">
          <h2 className="text-2xl mb-4">Update Order Status</h2>
          <div className="mb-4">
            <label htmlFor="orderStatus" className="block mb-2">
              Status
            </label>
            <select
              id="orderStatus"
              value={orderStatus}
              onChange={(e) => setOrderStatus(e.target.value)}
              className="border p-2 w-full"
            >
              <option value="Pending">Pending</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
          <button
            onClick={() => handleUpdateOrderStatus(editingOrderId)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Update Status
          </button>
        </div>
      )}

      <h2 className="text-2xl mb-4">All Orders</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border p-4">Order ID</th>
              <th className="border p-4">Customer Name</th>
              <th className="border p-4">Email</th>
              <th className="border p-4">Order Date</th>
              <th className="border p-4">Total Amount</th>
              <th className="border p-4">Status</th>
              <th className="border p-4">Items</th>
              <th className="border p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order._id} className="hover:bg-gray-100">
                  <td className="border p-4">{order._id}</td>
                  <td className="border p-4">{order.customerName}</td>
                  <td className="border p-4">{order.customerEmail}</td>
                  <td className="border p-4">{order.orderDate}</td>
                  <td className="border p-4">${order.totalAmount}</td>
                  <td className="border p-4">{order.status}</td>
                  <td className="border p-4">
                    {order.items.map((item, index) => (
                      <div key={index}>
                        {item.product} (x{item.quantity})
                      </div>
                    ))}
                  </td>
                  <td className="border p-4">
                    <button
                      onClick={() => handleEditOrder(order)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                    >
                      Edit Status
                    </button>
                    <button
                      onClick={() => handleDeleteOrder(order._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center p-4">
                  No orders available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagement;
