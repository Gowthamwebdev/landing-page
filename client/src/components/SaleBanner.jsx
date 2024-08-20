import React from 'react';

const SaleBanner = () => {
  return (
    <div className="relative w-full h-64 bg-white">
      {/* Background Word */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-9xl font-bold text-black opacity-10">SALE</span>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 p-8">
        <h2 className="text-4xl font-bold">Great Deals This Weekend!</h2>
        <p className="text-lg mt-4">Don't miss out on our exclusive offers.</p>
      </div>
    </div>
  );
};

export default SaleBanner;
