import { useState } from 'react';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 shadow-lg p-4 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform md:translate-x-0 md:relative`}
      >
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <ul>
          <li className="p-2 cursor-pointer">Overview</li>
          <li className="p-2 cursor-pointer">Analytics</li>
          <li className="p-2 cursor-pointer">Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col p-4 md:ml-64">
        <button
          className="md:hidden p-2 rounded mb-4"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? 'Close Menu' : 'Open Menu'}
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold">Revenue</h3>
            <div className="h-40 mt-2 flex items-center justify-center">
              Graph
            </div>
          </div>
          <div className="p-4 shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold">Users</h3>
            <div className="h-40 mt-2 flex items-center justify-center">
              Graph
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
