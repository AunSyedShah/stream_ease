'use client';

import React, { useState } from 'react';
import ProviderForm from '../Components/ProviderForm';
import ProviderList from '../Components/ProviderList';

const ManageProviders = () => {
  const [providers, setProviders] = useState([...dummyData.providers]);

  const addProvider = (newProvider) => {
    setProviders([...providers, newProvider]);
  };

  const updateProvider = (updatedProvider) => {
    const updatedProviders = providers.map(provider =>
      provider.id === updatedProvider.id ? updatedProvider : provider
    );
    setProviders(updatedProviders);
  };

  const deleteProvider = (providerId) => {
    const updatedProviders = providers.filter(provider => provider.id !== providerId);
    setProviders(updatedProviders);
  };

  return (
      <div className="container mx-auto p-6">
        <ProviderForm onAdd={addProvider} />
        <ProviderList
          providers={providers}
          onUpdate={updateProvider}
          onDelete={deleteProvider}
        />
      </div>
  );
};

export default ManageProviders;

const dummyData = {
    providers: [
      {
        id: 1,
        name: 'Netflix',
        logo: 'https://via.placeholder.com/50x50', // Replace with actual logo URL
        subscriptionUrl: 'https://www.netflix.com/subscribe'
      },
      {
        id: 2,
        name: 'Amazon Prime Video',
        logo: 'https://via.placeholder.com/50x50', // Replace with actual logo URL
        subscriptionUrl: 'https://www.amazon.com/prime-video'
      },
      {
        id: 3,
        name: 'Disney+',
        logo: 'https://via.placeholder.com/50x50', // Replace with actual logo URL
        subscriptionUrl: 'https://www.disneyplus.com/subscribe'
      },
      // Add more providers as needed
    ],
  };
