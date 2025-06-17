import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

const ContactButton: React.FC = () => {
  return (
    <div className="text-center py-16 bg-gradient-to-r from-gray-900/50 to-black/50">
      <Link
        to="/contact"
        className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 hover:from-blue-500 hover:to-cyan-500 shadow-lg hover:shadow-blue-500/25"
      >
        <MessageCircle size={20} />
        <span>Связаться с нами</span>
      </Link>
    </div>
  );
};

export default ContactButton;