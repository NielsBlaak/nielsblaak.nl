import React from "react";
import hatsa from "../asset/images/apps/hatsa.png";
import HighlightApp from "../src/components/HighlightApp";

const App = () => (
  <div className="bg-white">
    <h1 className="text-center text-4xl py-4">Mijn projecten</h1>
    <HighlightApp
      image={hatsa}
      className="bg-hatsa"
      title="Hatsa!"
      description="Hatsa is jouw online shoppingbuddy. Wij helpen alle online shoppers met het doen en organiseren van (toekomstige) online aankopen. Zo helpt Hatsa de dromen van online shoppers waar te maken."
      years="2016 - 2023"
    />
  </div>
);

export default App;
