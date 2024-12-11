const ProfileContent = () => {
  return (
    <div className="py-10">
      {/* Breadcrumb Section */}
      <div className="flex items-center justify-between mb-8 px-4 sm:px-8 lg:px-28">
        <p className="text-sm sm:text-base">
          <span className="opacity-50">Home</span> / My Account
        </p>
        <p className="text-sm sm:text-base">
          Welcome! <span className="text-red-500">Md Rimel</span>
        </p>
      </div>

      {/* Profile Section */}
      <div className="px-4 sm:px-8 lg:px-28">
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar Menu */}
          <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
            <h2 className="font-semibold mb-4">Manage My Account</h2>
            <ul className="space-y-2">
              <li className="text-red-500">My Profile</li>
              <li className="opacity-50">Address Book</li>
              <li className="opacity-50">My Payment Options</li>
            </ul>

            <h2 className="font-semibold mt-6 mb-4">My Orders</h2>
            <ul className="space-y-2">
              <li className="opacity-50">My Returns</li>
              <li className="opacity-50">My Cancellations</li>
            </ul>

            <h2 className="font-semibold mt-6 mb-4">My Wishlist</h2>
          </div>

          {/* Edit Profile Form */}
          <div className="w-full lg:w-3/4 bg-white p-8 shadow-md rounded-md">
            <h2 className="font-semibold text-lg mb-6 text-red-500">
              Edit Your Profile
            </h2>
            <form>
              {/* First and Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-100 border-gray-300 rounded-md shadow-sm px-4 py-3 focus:border-red-500 focus:ring-red-500"
                    defaultValue="Md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-100 border-gray-300 rounded-md shadow-sm px-4 py-3 focus:border-red-500 focus:ring-red-500"
                    defaultValue="Rimel"
                  />
                </div>
              </div>

              {/* Email and Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-gray-100 border-gray-300 rounded-md shadow-sm px-4 py-3 focus:border-red-500 focus:ring-red-500"
                    defaultValue="rimel1111@gmail.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-100 border-gray-300 rounded-md shadow-sm px-4 py-3 focus:border-red-500 focus:ring-red-500"
                    defaultValue="Kingston, 5236, United State"
                  />
                </div>
              </div>

              {/* Password Changes */}
              <div className="mb-6">
                <h3 className="font-medium text-lg mb-4">Password Changes</h3>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Current Password
                    </label>
                    <input
                      type="password"
                      className="w-full bg-gray-100 border-gray-300 rounded-md shadow-sm px-4 py-3 focus:border-red-500 focus:ring-red-500"
                      placeholder="Current Password"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="w-full bg-gray-100 border-gray-300 rounded-md shadow-sm px-4 py-3 focus:border-red-500 focus:ring-red-500"
                      placeholder="New Password"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      className="w-full bg-gray-100 border-gray-300 rounded-md shadow-sm px-4 py-3 focus:border-red-500 focus:ring-red-500"
                      placeholder="Confirm New Password"
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between lg:justify-end gap-4">
                <button
                  type="button"
                  className="py-2 px-4 bg-gray-300 text-black rounded-md shadow-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 px-4 bg-red-500 text-white rounded-md shadow-sm hover:bg-red-600"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
