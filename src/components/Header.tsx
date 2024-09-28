import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="ExamSage Logo" width={32} height={32} />
            <span className="text-2xl font-bold text-indigo-600">ExamSage</span>
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="text-gray-600 hover:text-indigo-600">Home</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-indigo-600">Features</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-indigo-600">Pricing</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-indigo-600">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;