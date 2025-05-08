import React, { useState } from 'react';

const GroupChallenges = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Sample group challenges data
  const groupChallenges = [
    {
      id: 1,
      title: "30 Days Fitness Challenge",
      members: 45,
      progress: 75,
      category: "fitness",
      description: "Join our fitness community for a 30-day workout challenge!",
      startDate: "2024-03-01",
      endDate: "2024-03-30"
    },
    {
      id: 2,
      title: "Reading Club",
      members: 32,
      progress: 60,
      category: "education",
      description: "Read one book per week with our reading community",
      startDate: "2024-03-15",
      endDate: "2024-04-15"
    },
    {
      id: 3,
      title: "Healthy Eating Group",
      members: 28,
      progress: 85,
      category: "health",
      description: "Share healthy recipes and meal plans",
      startDate: "2024-03-10",
      endDate: "2024-04-10"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Group Challenges</h1>
        <p className="text-gray-600">
          Join group challenges to achieve your goals together with others!
        </p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveTab('all')}
        >
          All Groups
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'fitness'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveTab('fitness')}
        >
          Fitness
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'education'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveTab('education')}
        >
          Education
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'health'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveTab('health')}
        >
          Health
        </button>
      </div>

      {/* Create New Group Button */}
      <button className="bg-green-600 text-white px-6 py-2 rounded-lg mb-6 hover:bg-green-700 transition-colors">
        Create New Group
      </button>

      {/* Group Challenges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groupChallenges
          .filter(challenge => activeTab === 'all' || challenge.category === activeTab)
          .map(challenge => (
            <div key={challenge.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{challenge.title}</h3>
              <p className="text-gray-600 mb-4">{challenge.description}</p>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-500 mb-1">
                  <span>Progress</span>
                  <span>{challenge.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${challenge.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <span>{challenge.members} members</span>
                <span>{challenge.startDate} - {challenge.endDate}</span>
              </div>

              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Join Group
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GroupChallenges; 