import React from "react";

const Header = () => (
  <div className="flex flex-col items-center justify-center bg-slate-300 py-6 text-black">
    <h1 className="text-4xl font-mono border-r-2 border-black tracking-widest animate-blingking">
      Niels Blaak
    </h1>
  </div>
);

export default React.memo(Header);
