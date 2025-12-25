import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Book, Users, TrendingUp, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user, isMember, isLibrarian, isAdmin } = useAuth();

  const memberStats = [
    {
      icon: <Book className="w-8 h-8" />,
      label: "Books Borrowed",
      value: "5",
      color: "blue",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      label: "Due Soon",
      value: "2",
      color: "orange",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      label: "Books Read",
      value: "23",
      color: "green",
    },
  ];

  const librarianStats = [
    {
      icon: <Book className="w-8 h-8" />,
      label: "Total Books",
      value: "10,234",
      color: "blue",
    },
    {
      icon: <Users className="w-8 h-8" />,
      label: "Active Members",
      value: "5,432",
      color: "green",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      label: "Books Out",
      value: "1,234",
      color: "orange",
    },
  ];

  const stats = isMember ? memberStats : librarianStats;

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      orange: "bg-orange-100 text-orange-600",
      purple: "bg-purple-100 text-purple-600",
    };
    return colors[color] || colors.blue;
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome back, {user?.name}!
        </h1>
        <p className="text-gray-600">
          {isMember && "Here's your reading activity"}
          {isLibrarian && "Here's your library overview"}
          {isAdmin && "Here's your system overview"}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
              </div>
              <div className={`p-4 rounded-lg ${getColorClasses(stat.color)}`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/books"
            className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition text-center"
          >
            <Book className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="font-semibold text-gray-800">Browse Books</p>
          </Link>

          {(isLibrarian || isAdmin) && (
            <Link
              to="/members"
              className="bg-green-50 hover:bg-green-100 p-4 rounded-lg transition text-center"
            >
              <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <p className="font-semibold text-gray-800">Manage Members</p>
            </Link>
          )}

          {isAdmin && (
            <Link
              to="/reports"
              className="bg-purple-50 hover:bg-purple-100 p-4 rounded-lg transition text-center"
            >
              <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <p className="font-semibold text-gray-800">View Reports</p>
            </Link>
          )}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Recent Activity
        </h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <div>
              <p className="font-semibold text-gray-800">
                Borrowed: "The Great Gatsby"
              </p>
              <p className="text-sm text-gray-600">Due: Dec 30, 2025</p>
            </div>
            <span className="text-sm text-blue-600">Active</span>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-gray-200">
            <div>
              <p className="font-semibold text-gray-800">Returned: "1984"</p>
              <p className="text-sm text-gray-600">Returned: Dec 20, 2025</p>
            </div>
            <span className="text-sm text-green-600">Completed</span>
          </div>
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-semibold text-gray-800">
                Reserved: "To Kill a Mockingbird"
              </p>
              <p className="text-sm text-gray-600">Pick up by: Dec 26, 2025</p>
            </div>
            <span className="text-sm text-yellow-600">Reserved</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
