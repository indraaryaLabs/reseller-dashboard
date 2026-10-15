import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10 text-center relative z-20 bg-[#0B0B0B]">
      <div className="font-heading font-bold text-2xl tracking-widest text-white flex items-center justify-center gap-2 mb-6">
        NOIR<span className="text-[#FF6A00]">.</span>
      </div>
      <p className="text-gray-600 text-sm">© 2026 Noir Exclusive Parfumerie. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
