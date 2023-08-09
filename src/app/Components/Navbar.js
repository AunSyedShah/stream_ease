import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <Link href="/">My Streaming Portal
        </Link>
        <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 mt-4 sm:mt-0">
          <NavItem href="/dashboard">Dashboard</NavItem>
          <NavItem href="/manage-providers">Manage Providers</NavItem>
          <NavItem href="/manage-subscriptions">Manage Subscriptions</NavItem>
          <NavItem href="/favorites">Favorites</NavItem>
          <NavItem href="/feedback">Feedback</NavItem>
          <NavItem href="/contact">Contact Us</NavItem>
        </ul>
      </div>
    </nav>
  );
};

const NavItem = ({ href, children }) => {
  return (
    <li>
      <Link href={href}>{children}
      </Link>
    </li>
  );
};

export default Navbar;
