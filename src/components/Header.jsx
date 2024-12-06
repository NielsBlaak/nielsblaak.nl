import React from 'react';

function Header() {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-300 py-6 text-black">
      <h1 className="animate-blinking border-r-2 border-black font-mono text-4xl tracking-widest">
        Niels Blaak
      </h1>
    </div>
  );
}

export default Header;
