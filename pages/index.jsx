import React from "react";
import hatsa from "../asset/images/apps/hatsa.png";
import jex from "../asset/images/apps/jex.webp";
import HighlightApp from "../src/components/HighlightApp";

const App = () => (
  <div className="bg-white">
    <HighlightApp
      image={jex}
      className="bg-[#4C2368]"
      title="JEX"
      description="JEX is de one-stop-shop voor de flexibele arbeidsmarkt. Onze producten en diensten maken jouw werk nóg makkelijker. We bieden je de totaaloplossing die je nodig hebt om te groeien."
      years="2023 - heden"
    />
    <HighlightApp
      showPhone
      image={hatsa}
      className="bg-hatsa"
      title="Hatsa!"
      description="Hatsa is jouw online shoppingbuddy. Wij helpen alle online shoppers met het doen en organiseren van (toekomstige) online aankopen. Zo helpt Hatsa de dromen van online shoppers waar te maken."
      years="2016 - 2023"
    />
  </div>
);

export default App;
