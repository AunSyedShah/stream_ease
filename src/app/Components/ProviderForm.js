import React, { useState } from 'react';

const ProviderForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [logo, setLogo] = useState('');
  const [subscriptionUrl, setSubscriptionUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !logo || !subscriptionUrl) {
      alert('Please fill in all fields.');
      return;
    }
    
    const newProvider = {
      id: Date.now(),
      name,
      logo,
      subscriptionUrl,
    };

    onAdd(newProvider);
    setName('');
    setLogo('');
    setSubscriptionUrl('');
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-2">Add New Provider</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-3 py-2 border rounded w-full"
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            placeholder="Logo URL"
            value={logo}
            onChange={(e) => setLogo(e.target.value)}
            className="px-3 py-2 border rounded w-full"
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            placeholder="Subscription URL"
            value={subscriptionUrl}
            onChange={(e) => setSubscriptionUrl(e.target.value)}
            className="px-3 py-2 border rounded w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Provider
        </button>
      </form>
    </div>
  );
};

export default ProviderForm;
