import React from 'react';
import HighlightApp from '../src/components/HighlightApp';

function App() {
  return (
    <div className="bg-white">
      <HighlightApp
        className="bg-[#4C2368]"
        title="JEX"
        description="JEX is de one-stop-shop voor de flexibele arbeidsmarkt. Onze producten en diensten maken jouw werk nóg makkelijker. We bieden je de totaaloplossing die je nodig hebt om te groeien."
        years="2023 - heden"
      />
      <HighlightApp
        className="bg-hatsa"
        title="Hatsa!"
        description="Hatsa is jouw online shoppingbuddy. Wij helpen alle online shoppers met het doen en organiseren van (toekomstige) online aankopen. Zo helpt Hatsa de dromen van online shoppers waar te maken."
        years="2016 - 2023"
      />
    </div>
  );
}

export default App;
