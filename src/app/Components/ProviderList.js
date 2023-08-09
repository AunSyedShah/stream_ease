import React from 'react';

const ProviderList = ({ providers, onUpdate, onDelete }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Providers List</h2>
      <ul>
        {providers.map(provider => (
          <li key={provider.id} className="mb-2 border rounded p-2 flex justify-between items-center">
            <div>
              <img src={provider.logo} alt={`${provider.name} Logo`} className="w-12 h-12 mr-2" />
              {provider.name}
            </div>
            <div>
              <button
                className="text-blue-500 hover:underline mr-2"
                onClick={() => onUpdate(provider)}
              >
                Edit
              </button>
              <button
                className="text-red-500 hover:underline"
                onClick={() => onDelete(provider.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProviderList;
