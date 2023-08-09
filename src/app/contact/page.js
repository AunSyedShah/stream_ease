import React from 'react';

const Contact = () => {
  return (
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
        <p className="mb-4">
          If you have any questions or feedback, please feel free to contact us using the email address below:
        </p>
        <a href="mailto:contact@example.com" className="text-blue-500 hover:underline">
          contact@example.com
        </a>
      </div>
  );
};

export default Contact;
