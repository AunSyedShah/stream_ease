import React from 'react';
import data from '../data.json';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">My Dashboard</h1>
      
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Streaming Provider</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plan</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Renewal Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.subscriptions.map(subscription => (   
              <tr key={subscription.id}>
                <td className="px-6 py-4 whitespace-nowrap">{data.streamingProviders.find(provider => provider.id === subscription.providerId).name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{subscription.plan}</td>
                <td className="px-6 py-4 whitespace-nowrap">${subscription.cost.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{subscription.renewalDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
