import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">My Streaming Portal</Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/manage-providers">Manage Providers</Link>
          </li>
          <li>
            <Link href="/manage-subscriptions">Manage Subscriptions</Link>
          </li>
          <li>
            <Link href="/favorites">Favorites</Link>
          </li>
          <li>
            <Link href="/feedback">Feedback</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
